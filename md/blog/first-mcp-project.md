---
title: Building my first MCP project
published: true
datePublished: 1735338177090
author: Joshua Anderson
authorPhoto: /img/joshua.jpeg
thumbnailPhoto: /img/ai-integration.png
bannerPhoto: /img/ai-integration.png
tags:
canonicalUrl: https://scribedbystardust.com/blog/first-mcp-project
---

# I built an MCP project - here's my thoughts

## What's MCP?
[The Model Context Protocol](https://www.anthropic.com/news/model-context-protocol) is Anthropic's way of allowing models to have agentic capabilities. You can create an action (only bounded by your creativity) and then have the model execute it.

This is a way to standardize the interactions between a model and a given capability, so that interoperability is fairly painless.

## Final result:

I made a simple test project that fetches CIA world factbook from [this excellent open source data set](https://github.com/factbook/factbook.json?tab=readme-ov-file).

The final result is published here:
[Github](https://github.com/Joshuatanderson/factbook-mcp)
[NPM](https://www.npmjs.com/package/factbook-mcp).

You can try it out on your laptop if you'd like, and have claude installed.

First, run this: ```code ~/Library/Application\ Support/Claude/claude_desktop_config.json```

Edit the file to add the following:

```json
{
    "mcpServers": {
      "factbook-mcp": {
        "command": "npx",
        "args": [
          "factbook-mcp",
          "--yes"
        ]
      }
    }
}
```

Close Claude, and re-open it. Now, you can ask it to do something like `fetch me some information about the Netherlands,` and it will be able to get the information from the CIA world factbook, instead of having to rely on its training data!

## Lessons learned
I won't try to explain everything I did in this project, but I will note the things that I wish I'd known at the start.

### Limiting scope
Use a language you know well.** I used Go at first - but trying to learn the MCP was a challenge, and working with an unfamiliar language made it very difficult to know exactly what to do. Next time, I'll limit myself to using either a new concept, or a new language, but not both.

### MCP basics
Using a language that already has support from Anthropic makes it much easier to get started. Typescript and Node are the two that are currently in their docs (as of Dec. 2024).

There are two main ways to use the MCP protocol. You can either make a server that receives requests and responses, and listens on a port the (SSE section of the SDK), or you can make something that runs locally, with the stdio sction of the library.

If you use the stdio section, as I ended up doing, you'll want to either use it locally, or publish it as an npm package.

## Miscellaneous tips
- Use the [quickstart](https://modelcontextprotocol.io/quickstart/server) as a guide. It's actually pretty solid.
- At first, I wanted to make an endpoint that would return a list of capabilities, or other syntax guides. The sort of instructions or documentation you'd want to give to a model to use your tool properly should be in the "resources" section of the MCP, not a tool. 
- Keep in mind that you can only return text and blobs as your content. Responses in MCP are very tightly typed, and it will fail without a type match.

## Final thoughts
It only took me about 4 hours to get this working. Most of this time was spent trying to figure out how to deploy it into a way that anyone could access it, and if I did it again, I could probably do the same project in an hour. 

Anthropic's MCP seems well thought out, and has great docs! Give it a go, and let me know what you build!
