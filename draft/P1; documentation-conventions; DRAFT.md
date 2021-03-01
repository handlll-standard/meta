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
document = head lb body

; Example:
;
;   # P1; Document Conventions; DRAFT
;   Obsoletes: P102
;   Authors: Zheng Hailang
head = head fields

; Document main content
body = text

; Example:
;
;   # P1; Document Conventions; DRAFT
;
; status can be omitted, PUBLISHED is the default status:
;
;   # P1; Document Conventions;
head = id ";" *s title [ ";" *s status ]

fields =  fieldversion lb fieldauthors lb fielddiscuss

fieldversion = "Version" colon version

fieldauthors = "Authors" colon (author *("," author))

fielddiscuss = "Discuss" colon text

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

; Text
text = UNKNOWN

; Digit
digit = "1" / "2" / "3" / "4" / "5" / "6" / "7" / "8" / "9" / "0"

; Digits
digits = 1*digit

colon = ":"

; Line break
lb = 1*"\n"

; Space
s = 1*" "
```
