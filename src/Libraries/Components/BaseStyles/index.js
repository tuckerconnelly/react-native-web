import React from 'react'

export default () =>
  <style
    dangerouslySetInnerHTML={{ __html: `
      html {
        width: 100%;
        height: 100%;
      }

      body {
        width: 100%;
        height: 100%;
        margin: 0;
      }

      #root {
        width 100%;
        height: 100%;
        display: flex;
      }
      
      .rnw-Image-initial {
        align-self: flex-start;

        background-color: transparent;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }

      .rnw-Image {
        max-width: 100%;
        max-height: 100%;
        height: auto;
        border-width: 0;

        opacity: 0;
      }

      .rnw-Image-children {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
      }

      .rnw-Image-contain {
        background-size: contain;
      }

      .rnw-Image-cover: {
        background-size: cover;
      }

      .rnw-Image-none: {
        background-size: auto;
      }

      .rnw-Image-stretch: {
        background-size: 100% 100%;
      }

      .rnw-Text {
        display: inline;
        padding: 0;
        margin: 0;

        color: inherit;
        font: inherit;
        text-decoration-line: none;
        word-wrap: break-word;
      }

      .rnw-Text-singleLineStyle {
        max-width: 100%;

        text-overflow: ellipsis;
        white-space: nowrap;

        overflow: hidden;
      }

      .rnw-View {
        position: relative;

        display: flex;
        box-sizing: border-box;
        min-height: 0;
        min-width: 0;
        padding: 0;
        margin: 0;
        border-width: 0;
        border-style: solid;
        outline: none;
        align-items: stretch;
        flex-basis: auto;
        flex-shrink: 0;
        flex-direction: column;

        font: inherit;
        color: inherit;
        text-align: inherit;
        text-decoration-line: none;

        background-color: transparent;

        list-style: none;
      }

      .rnw-TextInput-wrapper {
        flex-grow: 1;
      }

      .rnw-TextInput {
        appearance: none;
        flex-grow: 1;
        padding: 0;
        border-width: 0;
        outline: none;
        box-sizing: border-box;

        color: inherit;
        font: inherit;

        z-index: 1;

        background-color: transparent;
      }

      .rnw-TextInput-placeholder {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;

        justify-content: center;
      }

      .rnw-TextInput-placeholderText {
        color: darkgray;
        overflow: hidden;
        white-space: pre;
      }
    ` }}
  />
