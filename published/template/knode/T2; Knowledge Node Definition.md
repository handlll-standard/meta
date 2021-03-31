# T2; Knowledge Node Definition

$Stage: PUBLISHED

$Version: 1.0.2

$Template: T2@1.0.2

$Authors: Zheng Hailang

$Discussion: https://github.com/moonrating-standard/meta/issues

$Name: [? subject name]

$Parent: [? subject parent name]

## Definition

[? subject definition ...]

[? other body content ...]

*Template meta info start, you can delete the following content while implementing this template.*

## Document Structure

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

body = h2 "Definition" lb text
```
