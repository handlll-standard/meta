# P1; documentation-conventions; DRAFT

Version: 0.0.1

Authors: Zheng Hailang

Discuss: N/A

## Document Structure

Using [ABNF](https://tools.ietf.org/html/rfc5234) Syntax

```abnf
; Each document consits of two parts: meta info and actual content
; Example:
;
;   # P1; Document Conventions; DRAFT
;   Obsoletes: P102
;   Authors: Zheng Hailang
;
;   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
;   Asperiores consectetur corporis dicta dolores error est hic
;   illo ipsum iusto molestias officiis.
document = meta lb content

; Example:
;
;   # P1; Document Conventions; DRAFT
;   Obsoletes: P102
;   Authors: Zheng Hailang
meta = heading fields

; Document main content
content = text

; Example:
;
;   # P1; Document Conventions; DRAFT
;
; status can be omitted, PUBLISHED is the default status:
;
;   # P1; Document Conventions;
heading = id ";" *s title [ ";" *s status ]

fields =  fieldversion lb fieldauthors

fieldversion = "Version" colon version

fieldauthors = "Authors" colon (author *("," author))

; PUBLISHED is the default status.
status = "DRAFT" / "PUBLISHED"

; Document title.
title = text

; Document version
version = digits "." digits "." digits

; Author name
author = text

; Document identifier
id = scope digits

; Document scope
; "P" - Public
; "X" - Private
scope = "P" / "X"
text = UNKNOWN
digit = "1" / "2" / "3" / "4" / "5" / "6" / "7" / "8" / "9" / "0"
digits = 1*digit
colon = ":"
lb = 1*"\n"
s = 1*" "
```
