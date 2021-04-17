# T2; Knowledge Node Definition

$Stage: PUBLISHED

$Version: 1.1.2

$Template: T1@2.1.0

$Authors: Zheng Hailang

$Discussion: https://github.com/handlll-standard/meta/issues

$Name: [! Subject name]

$Parent: [! Subject parent name]

## Definition

[! Subject definition ...]

## Necessity and Usage

[! What are the scenarios for using this subject
[! Real world application of this subject]
[! What would happen if this subject does not exist]
]

[! Other body content ...]

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

body = h2 "Definition" lb h2 "Necessity and Usage" lb text
```
