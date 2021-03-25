# P1; Documentation Conventions; DRAFT

$Version: 1.1.2

$Convention: P1@1.1.2

$Authors: Zheng Hailang

$Discussion: N/A

## Document Structure

Using [ABNF](https://tools.ietf.org/html/rfc5234) Syntax

```abnf
; Each document consits of two parts: meta info and actual content
; Example:
;
;   # P1; Document Conventions; DRAFT
;   $Version: 1.0.0
;   $Convention: 1.0.0
;   $Authors: Zheng Hailang
;
;   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
;   Asperiores consectetur corporis dicta dolores error est hic
;   illo ipsum iusto molestias officiis.
document = head lb body

; Example:
;
;   # P1; Document Conventions; DRAFT
;   $Version: 1.0.0
;   $Convention: 1.0.0
;   $Authors: Zheng Hailang
head = heading fields

; Document main content
body = text

; Example:
;
;   # P1; Document Conventions; DRAFT
;
; status can be omitted, PUBLISHED is the default status:
;
;   # P1; Document Conventions;
heading = docid ";" *s title [ ";" *s status ]

; Meta fields, offical fields should prefix "$"
fields = field-version lb field-convention lb field-authors lb field-discussion *(lb field-custom)

; Version field
; Docuement version number
field-version = "$Version" colon version

; Convention field
; Convention version number (Format document id and version)
field-convention = "$Convention" colon docid "@" version

; Authors field
; Who wrote this document
field-authors = "$Authors" colon (author *("," author))

; Discussion field
field-discussion = "$Discussion" colon text

; Custom field
field-custom = text colon text

; PUBLISHED is the default status.
status = "DRAFT" / "PUBLISHED"

; Document title.
title = text

; Document version
version = digits "." digits "." digits

; Author name
author = text

; Document identifier
docid = scope digits

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

; Colon
colon = ":"

; Line break
lb = 1*"\n"

; Space
s = 1*" "
```

## Resources

- To verify ABNF syntax: [Bill's ABNF Parser](https://tools.ietf.org/tools/bap/abnf.cgi)
