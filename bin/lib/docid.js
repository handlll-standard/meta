const walk = require('walkdir');
const { pwd } = require('shelljs');
const { relative, basename } = require('path');

function get_max_docid() {
  const wd = pwd().toString();
  const r = {
    T: 0, // template id
    D: 0, // document id
  };

  walk.sync(wd, (path, stat) => {
    const p = relative(wd, path);
    if (p.startsWith('draft') || p.startsWith('published')) {
      if (stat.isFile()) {
        const file = basename(p);
        const id = parse_id(file);
        if (!id) { return; }
        if (r[id.type] < id.number) {
          r[id.type] = id.number;
        }
      }
    }
  });

  return r;
}

function get_next_docid() {
  const r = get_max_docid();
  r.D++;
  r.T++;
  return r;
}

function parse_id(filename) {
  const raw = filename.split(';')[0].trim();
  const r = {
    raw,
    type: raw.match(/[a-zA-Z]+/)?.[0],
    number: parseInt(raw.match(/\d+/)?.[0]),
  };

  if (!r.type || !r.number) { return null; }
  return r;
}

module.exports = {
  get_max_docid, get_next_docid,
};
