# T2; Subject Definition; DRAFT

$Stage: DRAFT

$Version: 1.0.0

$Template: T1@2.0.2

$Authors: Zheng Hailang

$Discussion: https://github.com/moonrating-standard/meta/issues

$Name: (?)

$Parent: (?)

*Template meta info start, you can delete the following content while implementing this template.*

## Document Structure

Using [ABNF](https://tools.ietf.org/html/rfc5234) Syntax

```abnf
; @extends(T1@2.0.0)

fields = field-name lb field-parent *(lb field-custom)

; Subject name
; @required
; @example:
;   $Name: Linear algebra
field-name = "$Name" kvd text

; Parent subject name
; @example:
;   $Parent: Algebra
field-parent = "$Parent" kvd text
```

## Resources

- To verify ABNF syntax: [Bill's ABNF Parser](https://tools.ietf.org/tools/bap/abnf.cgi)
