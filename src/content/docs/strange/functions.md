---
id: functions
title: Functions
description: StrangeApi Class Functions
sidebar:
  order: 2
keywords: [Hedystia, strang, strange-api, strange-api-wrapper, wrapper, api-wrapper]
---

## StrangeApi

**Kind**: global class

- [StrangeApi](#StrangeApi)
  - [new StrangeApi(api_key)](#new_StrangeApi_new)
  - [.blur()](#StrangeApi+blur) ⇒ <code>ArrayBuffer</code>
  - [.brighten()](#StrangeApi+brighten) ⇒ <code>ArrayBuffer</code>
  - [.burn()](#StrangeApi+burn) ⇒ <code>ArrayBuffer</code>
  - [.darken()](#StrangeApi+darken) ⇒ <code>ArrayBuffer</code>
  - [.deepfry()](#StrangeApi+deepfry) ⇒ <code>ArrayBuffer</code>
  - [.distort()](#StrangeApi+distort) ⇒ <code>ArrayBuffer</code>
  - [.greyscale()](#StrangeApi+greyscale) ⇒ <code>ArrayBuffer</code>
  - [.invert()](#StrangeApi+invert) ⇒ <code>ArrayBuffer</code>
  - [.pixelate()](#StrangeApi+pixelate) ⇒ <code>ArrayBuffer</code>
  - [.sepia()](#StrangeApi+sepia) ⇒ <code>ArrayBuffer</code>
  - [.sharpen()](#StrangeApi+sharpen) ⇒ <code>ArrayBuffer</code>
  - [.threshold()](#StrangeApi+threshold) ⇒ <code>ArrayBuffer</code>
  - [.pokemon3000Years()](#StrangeApi+pokemon3000Years) ⇒ <code>ArrayBuffer</code>
  - [.ad()](#StrangeApi+ad) ⇒ <code>ArrayBuffer</code>
  - [.affect()](#StrangeApi+affect) ⇒ <code>ArrayBuffer</code>
  - [.batslap()](#StrangeApi+batslap) ⇒ <code>ArrayBuffer</code>
  - [.beautiful()](#StrangeApi+beautiful) ⇒ <code>ArrayBuffer</code>
  - [.bed()](#StrangeApi+bed) ⇒ <code>ArrayBuffer</code>
  - [.bobross()](#StrangeApi+bobross) ⇒ <code>ArrayBuffer</code>
  - [.challenger()](#StrangeApi+challenger) ⇒ <code>ArrayBuffer</code>
  - [.changemymind()](#StrangeApi+changemymind) ⇒ <code>ArrayBuffer</code>
  - [.clown()](#StrangeApi+clown) ⇒ <code>ArrayBuffer</code>
  - [.clyde()](#StrangeApi+clyde) ⇒ <code>ArrayBuffer</code>
  - [.confusedstonk()](#StrangeApi+confusedstonk) ⇒ <code>ArrayBuffer</code>
  - [.delete()](#StrangeApi+delete) ⇒ <code>ArrayBuffer</code>
  - [.demotivational()](#StrangeApi+demotivational) ⇒ <code>ArrayBuffer</code>
  - [.dexter()](#StrangeApi+dexter) ⇒ <code>ArrayBuffer</code>
  - [.discordblack()](#StrangeApi+discordblack) ⇒ <code>ArrayBuffer</code>
  - [.discordblue()](#StrangeApi+discordblue) ⇒ <code>ArrayBuffer</code>
  - [.doublestonk()](#StrangeApi+doublestonk) ⇒ <code>ArrayBuffer</code>
  - [.facepalm()](#StrangeApi+facepalm) ⇒ <code>ArrayBuffer</code>
  - [.fusion()](#StrangeApi+fusion) ⇒ <code>ArrayBuffer</code>
  - [.gruPlan()](#StrangeApi+gruPlan) ⇒ <code>ArrayBuffer</code>
  - [.heartbreaking()](#StrangeApi+heartbreaking) ⇒ <code>ArrayBuffer</code>
  - [.hitler()](#StrangeApi+hitler) ⇒ <code>ArrayBuffer</code>
  - [.jail()](#StrangeApi+jail) ⇒ <code>ArrayBuffer</code>
  - [.jokeoverhead()](#StrangeApi+jokeoverhead) ⇒ <code>ArrayBuffer</code>
  - [.karaba()](#StrangeApi+karaba) ⇒ <code>ArrayBuffer</code>
  - [.kiss()](#StrangeApi+kiss) ⇒ <code>ArrayBuffer</code>
  - [.kyonGun()](#StrangeApi+kyonGun) ⇒ <code>ArrayBuffer</code>
  - [.lisaPresentation()](#StrangeApi+lisaPresentation) ⇒ <code>ArrayBuffer</code>
  - [.mikkelsen()](#StrangeApi+mikkelsen) ⇒ <code>ArrayBuffer</code>
  - [.mirror()](#StrangeApi+mirror) ⇒ <code>ArrayBuffer</code>
  - [.mms()](#StrangeApi+mms) ⇒ <code>ArrayBuffer</code>
  - [.notstonk()](#StrangeApi+notstonk) ⇒ <code>ArrayBuffer</code>
  - [.ohno()](#StrangeApi+ohno) ⇒ <code>ArrayBuffer</code>
  - [.planktonPlan()](#StrangeApi+planktonPlan) ⇒ <code>ArrayBuffer</code>
  - [.poutine()](#StrangeApi+poutine) ⇒ <code>ArrayBuffer</code>
  - [.rip()](#StrangeApi+rip) ⇒ <code>ArrayBuffer</code>
  - [.shit()](#StrangeApi+shit) ⇒ <code>ArrayBuffer</code>
  - [.snyder()](#StrangeApi+snyder) ⇒ <code>ArrayBuffer</code>
  - [.spank()](#StrangeApi+spank) ⇒ <code>ArrayBuffer</code>
  - [.stonk()](#StrangeApi+stonk) ⇒ <code>ArrayBuffer</code>
  - [.tattoo()](#StrangeApi+tattoo) ⇒ <code>ArrayBuffer</code>
  - [.thomas()](#StrangeApi+thomas) ⇒ <code>ArrayBuffer</code>
  - [.trash()](#StrangeApi+trash) ⇒ <code>ArrayBuffer</code>
  - [.wanted()](#StrangeApi+wanted) ⇒ <code>ArrayBuffer</code>
  - [.worthless()](#StrangeApi+worthless) ⇒ <code>ArrayBuffer</code>
  - [.youtube()](#StrangeApi+youtube) ⇒ <code>ArrayBuffer</code>
  - [.approved()](#StrangeApi+approved) ⇒ <code>ArrayBuffer</code>
  - [.brazzers()](#StrangeApi+brazzers) ⇒ <code>ArrayBuffer</code>
  - [.gay()](#StrangeApi+gay) ⇒ <code>ArrayBuffer</code>
  - [.halloween()](#StrangeApi+halloween) ⇒ <code>ArrayBuffer</code>
  - [.rejected()](#StrangeApi+rejected) ⇒ <code>ArrayBuffer</code>
  - [.thuglife()](#StrangeApi+thuglife) ⇒ <code>ArrayBuffer</code>
  - [.toBeContinued()](#StrangeApi+toBeContinued) ⇒ <code>ArrayBuffer</code>
  - [.wasted()](#StrangeApi+wasted) ⇒ <code>ArrayBuffer</code>
  - [.circle()](#StrangeApi+circle) ⇒ <code>ArrayBuffer</code>
  - [.color()](#StrangeApi+color) ⇒ <code>ArrayBuffer</code>
  - [.denoise()](#StrangeApi+denoise) ⇒ <code>ArrayBuffer</code>
  - [.farewellCard()](#StrangeApi+farewellCard) ⇒ <code>ArrayBuffer</code>
  - [.rankCard()](#StrangeApi+rankCard) ⇒ <code>ArrayBuffer</code>
  - [.welcomeCard()](#StrangeApi+welcomeCard) ⇒ <code>ArrayBuffer</code>

<a name="new_StrangeApi_new"></a>

### new StrangeApi(api_key)

| Param   | Type                |
| ------- | ------------------- |
| api_key | <code>string</code> |

<a name="StrangeApi+blur"></a>

### strangeApi.blur() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |
| data.level | <code>number</code> |

<a name="StrangeApi+brighten"></a>

### strangeApi.brighten() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param       | Type                |
| ----------- | ------------------- |
| data.image  | <code>string</code> |
| data.amount | <code>number</code> |

<a name="StrangeApi+burn"></a>

### strangeApi.burn() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |
| data.level | <code>number</code> |

<a name="StrangeApi+darken"></a>

### strangeApi.darken() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param       | Type                |
| ----------- | ------------------- |
| data.image  | <code>string</code> |
| data.amount | <code>number</code> |

<a name="StrangeApi+deepfry"></a>

### strangeApi.deepfry() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+distort"></a>

### strangeApi.distort() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |
| data.level | <code>number</code> |

<a name="StrangeApi+greyscale"></a>

### strangeApi.greyscale() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+invert"></a>

### strangeApi.invert() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+pixelate"></a>

### strangeApi.pixelate() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param       | Type                |
| ----------- | ------------------- |
| data.image  | <code>string</code> |
| data.pixels | <code>number</code> |

<a name="StrangeApi+sepia"></a>

### strangeApi.sepia() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+sharpen"></a>

### strangeApi.sharpen() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |
| data.level | <code>number</code> |

<a name="StrangeApi+threshold"></a>

### strangeApi.threshold() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param       | Type                |
| ----------- | ------------------- |
| data.image  | <code>string</code> |
| data.amount | <code>number</code> |

<a name="StrangeApi+pokemon3000Years"></a>

### strangeApi.pokemon3000Years() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+ad"></a>

### strangeApi.ad() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+affect"></a>

### strangeApi.affect() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+batslap"></a>

### strangeApi.batslap() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param       | Type                |
| ----------- | ------------------- |
| data.image1 | <code>string</code> |
| data.image2 | <code>string</code> |

<a name="StrangeApi+beautiful"></a>

### strangeApi.beautiful() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+bed"></a>

### strangeApi.bed() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param       | Type                |
| ----------- | ------------------- |
| data.image1 | <code>string</code> |
| data.image2 | <code>string</code> |

<a name="StrangeApi+bobross"></a>

### strangeApi.bobross() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+challenger"></a>

### strangeApi.challenger() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param            | Type                 |
| ---------------- | -------------------- |
| data.image       | <code>string</code>  |
| data.silhouetted | <code>boolean</code> |

<a name="StrangeApi+changemymind"></a>

### strangeApi.changemymind() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param     | Type                |
| --------- | ------------------- |
| data.text | <code>string</code> |

<a name="StrangeApi+clown"></a>

### strangeApi.clown() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+clyde"></a>

### strangeApi.clyde() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param     | Type                |
| --------- | ------------------- |
| data.text | <code>string</code> |

<a name="StrangeApi+confusedstonk"></a>

### strangeApi.confusedstonk() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+delete"></a>

### strangeApi.delete() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+demotivational"></a>

### strangeApi.demotivational() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.title | <code>string</code> |
| data.text  | <code>string</code> |
| data.image | <code>string</code> |

<a name="StrangeApi+dexter"></a>

### strangeApi.dexter() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+discordblack"></a>

### strangeApi.discordblack() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+discordblue"></a>

### strangeApi.discordblue() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+doublestonk"></a>

### strangeApi.doublestonk() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param       | Type                |
| ----------- | ------------------- |
| data.image1 | <code>string</code> |
| data.image2 | <code>string</code> |

<a name="StrangeApi+facepalm"></a>

### strangeApi.facepalm() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+fusion"></a>

### strangeApi.fusion() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param       | Type                |
| ----------- | ------------------- |
| data.image1 | <code>string</code> |
| data.image2 | <code>string</code> |

<a name="StrangeApi+gruPlan"></a>

### strangeApi.gruPlan() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param            | Type                |
| ---------------- | ------------------- |
| data.first_step  | <code>string</code> |
| data.second_step | <code>string</code> |
| data.third_step  | <code>string</code> |
| data.fourth_step | <code>string</code> |

<a name="StrangeApi+heartbreaking"></a>

### strangeApi.heartbreaking() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+hitler"></a>

### strangeApi.hitler() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+jail"></a>

### strangeApi.jail() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+jokeoverhead"></a>

### strangeApi.jokeoverhead() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+karaba"></a>

### strangeApi.karaba() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+kiss"></a>

### strangeApi.kiss() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param       | Type                |
| ----------- | ------------------- |
| data.image1 | <code>string</code> |
| data.image2 | <code>string</code> |

<a name="StrangeApi+kyonGun"></a>

### strangeApi.kyonGun() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+lisaPresentation"></a>

### strangeApi.lisaPresentation() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param     | Type                |
| --------- | ------------------- |
| data.text | <code>string</code> |

<a name="StrangeApi+mikkelsen"></a>

### strangeApi.mikkelsen() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+mirror"></a>

### strangeApi.mirror() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+mms"></a>

### strangeApi.mms() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+notstonk"></a>

### strangeApi.notstonk() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+ohno"></a>

### strangeApi.ohno() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param     | Type                |
| --------- | ------------------- |
| data.text | <code>string</code> |

<a name="StrangeApi+planktonPlan"></a>

### strangeApi.planktonPlan() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param            | Type                |
| ---------------- | ------------------- |
| data.first_step  | <code>string</code> |
| data.second_step | <code>string</code> |
| data.third_step  | <code>string</code> |
| data.fourth_step | <code>string</code> |

<a name="StrangeApi+poutine"></a>

### strangeApi.poutine() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+rip"></a>

### strangeApi.rip() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+shit"></a>

### strangeApi.shit() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+snyder"></a>

### strangeApi.snyder() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+spank"></a>

### strangeApi.spank() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param       | Type                |
| ----------- | ------------------- |
| data.image1 | <code>string</code> |
| data.image2 | <code>string</code> |

<a name="StrangeApi+stonk"></a>

### strangeApi.stonk() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+tattoo"></a>

### strangeApi.tattoo() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+thomas"></a>

### strangeApi.thomas() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+trash"></a>

### strangeApi.trash() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+wanted"></a>

### strangeApi.wanted() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+worthless"></a>

### strangeApi.worthless() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+youtube"></a>

### strangeApi.youtube() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param         | Type                |
| ------------- | ------------------- |
| data.image    | <code>string</code> |
| data.username | <code>string</code> |
| data.text     | <code>string</code> |

<a name="StrangeApi+approved"></a>

### strangeApi.approved() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+brazzers"></a>

### strangeApi.brazzers() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+gay"></a>

### strangeApi.gay() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+halloween"></a>

### strangeApi.halloween() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+rejected"></a>

### strangeApi.rejected() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+thuglife"></a>

### strangeApi.thuglife() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+toBeContinued"></a>

### strangeApi.toBeContinued() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+wasted"></a>

### strangeApi.wasted() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+circle"></a>

### strangeApi.circle() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+color"></a>

### strangeApi.color() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param     | Type                |
| --------- | ------------------- |
| data.code | <code>string</code> |

<a name="StrangeApi+denoise"></a>

### strangeApi.denoise() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param      | Type                |
| ---------- | ------------------- |
| data.image | <code>string</code> |

<a name="StrangeApi+farewellCard"></a>

### strangeApi.farewellCard() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param              | Type                |
| ------------------ | ------------------- |
| data.avatar        | <code>string</code> |
| data.name          | <code>string</code> |
| data.discriminator | <code>string</code> |
| data.count         | <code>number</code> |
| data.guild         | <code>string</code> |
| data.bkg           | <code>string</code> |

<a name="StrangeApi+rankCard"></a>

### strangeApi.rankCard() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param              | Type                |
| ------------------ | ------------------- |
| data.avatar        | <code>string</code> |
| data.currentxp     | <code>number</code> |
| data.reqxp         | <code>number</code> |
| data.level         | <code>number</code> |
| data.rank          | <code>number</code> |
| data.status        | <code>string</code> |
| data.name          | <code>string</code> |
| data.discriminator | <code>string</code> |
| data.barcolor      | <code>string</code> |
| data.bgimage       | <code>string</code> |
| data.bgcolor       | <code>string</code> |

<a name="StrangeApi+welcomeCard"></a>

### strangeApi.welcomeCard() ⇒ <code>ArrayBuffer</code>

**Kind**: instance method of [<code>StrangeApi</code>](#StrangeApi)

| Param              | Type                |
| ------------------ | ------------------- |
| data.avatar        | <code>string</code> |
| data.name          | <code>string</code> |
| data.discriminator | <code>string</code> |
| data.count         | <code>number</code> |
| data.guild         | <code>string</code> |
| data.bkg           | <code>string</code> |
