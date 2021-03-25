# P1; Documentation Conventions; DRAFT

$Stage: DRAFT

$Version: 1.2.1

$Convention: P1@1.2.1

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
; stage can be omitted, PUBLISHED is the default stage:
;
;   # P1; Document Conventions;
heading = docid ";" *s title [ ";" *s stage ]

; Meta fields, offical fields should prefix "$"
fields = field-stage lb field-version lb field-convention lb field-authors lb field-discussion *(lb field-custom)

; Version field
; Docuement version number
field-version = "$Version" colon version

; Stage field
; Docuement version number
field-stage = "$Stage" colon stage

; Convention field
; Convention version number (Format document id and version)
field-convention = "$Convention" colon docid "@" version

; Authors field
; Who wrote this document
field-authors = "$Authors" colon (author *("," author))

; Discussion field
field-discussion = "$Discussion" colon url

; Custom field
field-custom = *"$" id colon text

; PUBLISHED is the default stage.
stage = "DRAFT" / "PUBLISHED"

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

; General identifier (like typical variable names)
id = letter *(letter / digit / underscore)

; URL
url = text

; Text
text = UNKNOWN

; Digit
digit = %x30-39;

; Letter (A-Za-z)
letter = letteru / letterl

; Upper-case letters (A-Z)
letteru = %x41-5A;

; Lower-case letters (a-z)
letterl = %x61-7A;

; Digits (0-9)
digits = 1*digit

; Underscore
underscore = "_"

; Colon
colon = ":"

; Line break
lb = 1*"\n"

; Space
s = 1*" "
```

## Resources

- To verify ABNF syntax: [Bill's ABNF Parser](https://tools.ietf.org/tools/bap/abnf.cgi)
