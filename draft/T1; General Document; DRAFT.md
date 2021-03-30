# T1; General Document; DRAFT

$Stage: DRAFT

$Version: 2.0.2

$Template: T1@2.0.2

$Authors: Zheng Hailang

$Discussion: https://github.com/moonrating-standard/meta/issues

*Template meta info start, you can delete the following content while implementing this template.*

## Document Structure

Using [ABNF](https://tools.ietf.org/html/rfc5234) Syntax

```abnf
; Each document consits of two parts: meta info and actual content
; @example:
;   # T1; General Documentation Conventions; DRAFT
;   $Version: 1.0.0
;   $Template: T1@1.2.1
;   $Authors: Zheng Hailang
;
;   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
;   Asperiores consectetur corporis dicta dolores error est hic
;   illo ipsum iusto molestias officiis.
document = head lb body

; @example:
;   # T1; General Documentation Conventions; DRAFT
;   $Version: 1.0.0
;   $Template: T1@1.2.1
;   $Authors: Zheng Hailang
head = heading fields

; Document main content
body = text

; @example:
;   # T1; General Documentation Conventions; DRAFT
; stage can be omitted, PUBLISHED is the default stage:
;   # T1; Document Conventions;
heading = docid ";" *s title [ ";" *s stage ]

; Meta fields, offical fields should prefix "$"
; @example:
;   $Stage: DRAFT
;   $Version: 2.0.0
;   $Template: T1@2.0.0
;   $Authors: Zheng Hailang
;   $Discussion: example.com/discussion
fields = field-stage lb field-version lb field-template lb field-authors lb field-discussion *(lb field-custom)

; Stage field
; Docuement stage
; @required
; @example:
;   $Stage: DRAFT
field-stage = "$Stage" kvd stage

; Version field
; Docuement version number
; @required
; @example:
;   $Version: 2.0.1
field-version = "$Version" kvd version

; Template field
; Which template convention this document will apply (Format document id and version)
; @required
; @example:
;   $Template: T1@2.0.0
field-template = "$Template" kvd docid "@" version

; Authors field
; Who wrote this document
; @example:
;   $Authors: Zheng Hailang, Pink Floyd
field-authors = "$Authors" kvd (author *("," author))

; Discussion field
; Where to discuss topic about this document
; @example:
;   $Discussion: example.com/discussion
field-discussion = "$Discussion" kvd url

; Custom field
; For other needs
; @example:
;   Visibility: PUBLIC
;   Language_scope: C, C++ 
field-custom = *"$" id kvd text

; PUBLISHED is the default stage.
stage = "DRAFT" / "PUBLISHED"

; Key-value divider
kvd = *s colon *s

; Document title.
title = text

; Document version
version = digits "." digits "." digits

; Author name
author = text

; Document identifier
docid = type digits

; Document type
; "T" - Template, document format template for regular document to "implement"
; "D" - Document, regular document
type = "T" / "D"

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
