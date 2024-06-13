/** @jsxImportSource @emotion/react */


import { Fragment, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext } from "/utils/context"
import { Event, generateUUID, getBackendURL, isTrue, refs } from "/utils/state"
import { ChevronDownIcon as LucideChevronDownIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "/env.json"
import { Box as RadixThemesBox, Button as RadixThemesButton, Container as RadixThemesContainer, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import { Content as RadixAccordionContent, Header as RadixAccordionHeader, Item as RadixAccordionItem, Root as RadixAccordionRoot, Trigger as RadixAccordionTrigger } from "@radix-ui/react-accordion"
import NextLink from "next/link"
import NextHead from "next/head"



export function Item_bf67151c0294b5daca675977a2350521 () {



  return (
    <RadixAccordionItem className={`AccordionItem`} css={{"overflow": "hidden", "width": "100%", "marginTop": "1px", "borderTop": "var(--divider-px) solid var(--gray-a6)", "&:first-child": {"marginTop": 0, "borderTop": 0, "borderTopLeftRadius": "var(--radius-4)", "borderTopRightRadius": "var(--radius-4)"}, "&:last-child": {"borderBottomLeftRadius": "var(--radius-4)", "borderBottomRightRadius": "var(--radius-4)"}, "&:focus-within": {"position": "relative", "zIndex": 1}, "&:first-child[data-variant='ghost'], *:where([data-variant='ghost']) &:first-child": {"borderRadius": 0, "borderTop": "var(--divider-px) solid var(--gray-a6)"}, "&:last-child[data-variant='ghost'], *:where([data-variant='ghost']) &:last-child": {"borderRadius": 0, "borderBottom": "var(--divider-px) solid var(--gray-a6)"}}} value={generateUUID()}>
  <RadixAccordionHeader className={`AccordionHeader`} css={{"display": "flex"}}>
  <RadixAccordionTrigger className={`AccordionTrigger`} css={{"color": "var(--accent-11)", "fontSize": "1.1em", "lineHeight": 1, "justifyContent": "space-between", "alignItems": "center", "flex": 1, "display": "flex", "padding": "var(--space-3) var(--space-4)", "width": "100%", "boxShadow": "0 var(--divider-px) 0 var(--gray-a6)", "&[data-state='open'] > .AccordionChevron": {"transform": "rotate(180deg)"}, "&:hover": {"backgroundColor": "var(--accent-4)"}, "& > .AccordionChevron": {"transition": "transform var(--animation-duration) var(--animation-easing)"}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)", "&:hover": {"backgroundColor": "var(--accent-10)"}, "& > .AccordionChevron": {"color": "var(--accent-contrast)"}}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`py/insecure-temporary-file`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`introduced in commit`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/8951b7fb562b92c610c1be12606c83d198f3bf73`} passHref={true}>
  {`8951b7fb5`}
</NextLink>
</RadixThemesLink>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`by`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`{}`} passHref={true}>
  {`{}`}
</NextLink>
</RadixThemesLink>
</RadixThemesBox>
  <LucideChevronDownIcon className={`AccordionChevron`} css={{"color": "var(--current-color)"}}/>
</RadixAccordionTrigger>
</RadixAccordionHeader>
  <RadixAccordionContent className={`AccordionContent`} css={{"overflow": "hidden", "color": "var(--accent-11)", "paddingInlineStart": "var(--space-4)", "paddingInlineEnd": "var(--space-4)", "&:before, &:after": {"content": "' '", "display": "block", "height": "var(--space-3)"}, "&[data-state='open']": {"animation": `${slideDown} var(--animation-duration) var(--animation-easing)`}, "&[data-state='closed']": {"animation": `${slideUp} var(--animation-duration) var(--animation-easing)`}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)"}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Insecure temporary file: `}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`Creating a temporary file using this method may be insecure.`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Severity:`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`7.0`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`external/cwe/cwe-377`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Source: `}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/contrib/distribute/python/keras_utils_test.py`} passHref={true}>
  {`tensorflow/contrib/distribute/python/keras_utils_test.py:568`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -508,8 +508,7 @@ def test_save_load_h5(self, distribution):</span>\n<span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -527,6 +526,27 @@ def test_save_load_trackable(self, distribution):</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesButton css={{"background-color": "#0b082b", "color": "white", "border": "0", "border-radius": "30%"}}>
  {`✨`}
</RadixThemesButton>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_400ce3b43c0f8026d383f203e1cf05ae () {



  return (
    <RadixAccordionItem className={`AccordionItem`} css={{"overflow": "hidden", "width": "100%", "marginTop": "1px", "borderTop": "var(--divider-px) solid var(--gray-a6)", "&:first-child": {"marginTop": 0, "borderTop": 0, "borderTopLeftRadius": "var(--radius-4)", "borderTopRightRadius": "var(--radius-4)"}, "&:last-child": {"borderBottomLeftRadius": "var(--radius-4)", "borderBottomRightRadius": "var(--radius-4)"}, "&:focus-within": {"position": "relative", "zIndex": 1}, "&:first-child[data-variant='ghost'], *:where([data-variant='ghost']) &:first-child": {"borderRadius": 0, "borderTop": "var(--divider-px) solid var(--gray-a6)"}, "&:last-child[data-variant='ghost'], *:where([data-variant='ghost']) &:last-child": {"borderRadius": 0, "borderBottom": "var(--divider-px) solid var(--gray-a6)"}}} value={generateUUID()}>
  <RadixAccordionHeader className={`AccordionHeader`} css={{"display": "flex"}}>
  <RadixAccordionTrigger className={`AccordionTrigger`} css={{"color": "var(--accent-11)", "fontSize": "1.1em", "lineHeight": 1, "justifyContent": "space-between", "alignItems": "center", "flex": 1, "display": "flex", "padding": "var(--space-3) var(--space-4)", "width": "100%", "boxShadow": "0 var(--divider-px) 0 var(--gray-a6)", "&[data-state='open'] > .AccordionChevron": {"transform": "rotate(180deg)"}, "&:hover": {"backgroundColor": "var(--accent-4)"}, "& > .AccordionChevron": {"transition": "transform var(--animation-duration) var(--animation-easing)"}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)", "&:hover": {"backgroundColor": "var(--accent-10)"}, "& > .AccordionChevron": {"color": "var(--accent-contrast)"}}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`py/insecure-temporary-file`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`introduced in commit`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/f6860cd3056d1f965e13472e148f3b990ab9c9b4`} passHref={true}>
  {`f6860cd30`}
</NextLink>
</RadixThemesLink>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`by`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflower-gardener`} passHref={true}>
  {`tensorflower-gardener`}
</NextLink>
</RadixThemesLink>
</RadixThemesBox>
  <LucideChevronDownIcon className={`AccordionChevron`} css={{"color": "var(--current-color)"}}/>
</RadixAccordionTrigger>
</RadixAccordionHeader>
  <RadixAccordionContent className={`AccordionContent`} css={{"overflow": "hidden", "color": "var(--accent-11)", "paddingInlineStart": "var(--space-4)", "paddingInlineEnd": "var(--space-4)", "&:before, &:after": {"content": "' '", "display": "block", "height": "var(--space-3)"}, "&[data-state='open']": {"animation": `${slideDown} var(--animation-duration) var(--animation-easing)`}, "&[data-state='closed']": {"animation": `${slideUp} var(--animation-duration) var(--animation-easing)`}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)"}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Insecure temporary file: `}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`Creating a temporary file using this method may be insecure.`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Severity:`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`7.0`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`external/cwe/cwe-377`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Source: `}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/python/debug/examples/v1/debug_tflearn_iris.py`} passHref={true}>
  {`tensorflow/python/debug/examples/v1/debug_tflearn_iris.py:66`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -36,13 +36,16 @@ def main(_):</span>\n<span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -59,23 +62,23 @@ def test_input_fn():</span>\n<span style='background-color: #ffffff;'>  62|<span style='color:red;'>59  </span>         'exclusive.')</span>\n<span style='background-color: #ffffff;'>  63|<span style='color:red;'>60  </span>   hooks = []</span>\n<span style='background-color: #ffffff;'>  64|<span style='color:red;'>61  </span>   if FLAGS.debug:</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>62  </span>-    config_file_path = (tempfile.mktemp('.tfdbg_config')</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>63  </span>-                        if FLAGS.use_random_config_path else None)</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>64  </span>-    hooks.append(tf_debug.LocalCLIDebugHook(ui_type=FLAGS.ui_type,</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>65  </span>-                                            dump_root=FLAGS.dump_root,</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>66  </span>-                                            config_file_path=config_file_path))</span>\n<span style='background-color: #ddffdd;'>  65|<span style='color:red;'>    </span>+    config_file_path = (</span>\n<span style='background-color: #ddffdd;'>  66|<span style='color:red;'>    </span>+        tempfile.mktemp('.tfdbg_config')</span>\n<span style='background-color: #ddffdd;'>  67|<span style='color:red;'>    </span>+        if FLAGS.use_random_config_path else None)</span>\n<span style='background-color: #ddffdd;'>  68|<span style='color:red;'>    </span>+    hooks.append(</span>\n<span style='background-color: #ddffdd;'>  69|<span style='color:red;'>    </span>+        tf_debug.LocalCLIDebugHook(</span>\n<span style='background-color: #ddffdd;'>  70|<span style='color:red;'>    </span>+            ui_type=FLAGS.ui_type,</span>\n<span style='background-color: #ddffdd;'>  71|<span style='color:red;'>    </span>+            dump_root=FLAGS.dump_root,</span>\n<span style='background-color: #ddffdd;'>  72|<span style='color:red;'>    </span>+            config_file_path=config_file_path))</span>\n<span style='background-color: #ffffff;'>  73|<span style='color:red;'>67  </span>   elif FLAGS.tensorboard_debug_address:</span>\n<span style='background-color: #ffffff;'>  74|<span style='color:red;'>68  </span>     hooks.append(tf_debug.TensorBoardDebugHook(FLAGS.tensorboard_debug_address))</span>\n<span style='background-color: #ffffff;'>  75|<span style='color:red;'>69  </span> </span>\n<span style='background-color: #ffffff;'>  76|<span style='color:red;'>70  </span>   # Train model, using tfdbg hook.</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>71  </span>-  classifier.train(training_input_fn,</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>72  </span>-                   steps=FLAGS.train_steps,</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>73  </span>-                   hooks=hooks)</span>\n<span style='background-color: #ffffff;'>  78|<span style='color:red;'>74  </span> </span>\n<span style='background-color: #ffffff;'>  79|<span style='color:red;'>75  </span>   # Evaluate accuracy, using tfdbg hook.</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesButton css={{"background-color": "#0b082b", "color": "white", "border": "0", "border-radius": "30%"}}>
  {`✨`}
</RadixThemesButton>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Fragment_cf53a535ae2e610a113dd361eb6ac95b () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue(connectErrors.length > 0) ? (
  <Fragment>
  <LucideWifiOffIcon css={{"color": "crimson", "zIndex": 9999, "position": "fixed", "bottom": "33px", "right": "33px", "animation": `${pulse} 1s infinite`}} size={32}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Item_e5cb0d97d70d9f4e9e48a20526865b94 () {



  return (
    <RadixAccordionItem className={`AccordionItem`} css={{"overflow": "hidden", "width": "100%", "marginTop": "1px", "borderTop": "var(--divider-px) solid var(--gray-a6)", "&:first-child": {"marginTop": 0, "borderTop": 0, "borderTopLeftRadius": "var(--radius-4)", "borderTopRightRadius": "var(--radius-4)"}, "&:last-child": {"borderBottomLeftRadius": "var(--radius-4)", "borderBottomRightRadius": "var(--radius-4)"}, "&:focus-within": {"position": "relative", "zIndex": 1}, "&:first-child[data-variant='ghost'], *:where([data-variant='ghost']) &:first-child": {"borderRadius": 0, "borderTop": "var(--divider-px) solid var(--gray-a6)"}, "&:last-child[data-variant='ghost'], *:where([data-variant='ghost']) &:last-child": {"borderRadius": 0, "borderBottom": "var(--divider-px) solid var(--gray-a6)"}}} value={generateUUID()}>
  <RadixAccordionHeader className={`AccordionHeader`} css={{"display": "flex"}}>
  <RadixAccordionTrigger className={`AccordionTrigger`} css={{"color": "var(--accent-11)", "fontSize": "1.1em", "lineHeight": 1, "justifyContent": "space-between", "alignItems": "center", "flex": 1, "display": "flex", "padding": "var(--space-3) var(--space-4)", "width": "100%", "boxShadow": "0 var(--divider-px) 0 var(--gray-a6)", "&[data-state='open'] > .AccordionChevron": {"transform": "rotate(180deg)"}, "&:hover": {"backgroundColor": "var(--accent-4)"}, "& > .AccordionChevron": {"transition": "transform var(--animation-duration) var(--animation-easing)"}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)", "&:hover": {"backgroundColor": "var(--accent-10)"}, "& > .AccordionChevron": {"color": "var(--accent-contrast)"}}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`py/insecure-temporary-file`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`introduced in commit`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/f6860cd3056d1f965e13472e148f3b990ab9c9b4`} passHref={true}>
  {`f6860cd30`}
</NextLink>
</RadixThemesLink>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`by`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflower-gardener`} passHref={true}>
  {`tensorflower-gardener`}
</NextLink>
</RadixThemesLink>
</RadixThemesBox>
  <LucideChevronDownIcon className={`AccordionChevron`} css={{"color": "var(--current-color)"}}/>
</RadixAccordionTrigger>
</RadixAccordionHeader>
  <RadixAccordionContent className={`AccordionContent`} css={{"overflow": "hidden", "color": "var(--accent-11)", "paddingInlineStart": "var(--space-4)", "paddingInlineEnd": "var(--space-4)", "&:before, &:after": {"content": "' '", "display": "block", "height": "var(--space-3)"}, "&[data-state='open']": {"animation": `${slideDown} var(--animation-duration) var(--animation-easing)`}, "&[data-state='closed']": {"animation": `${slideUp} var(--animation-duration) var(--animation-easing)`}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)"}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Insecure temporary file: `}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`Creating a temporary file using this method may be insecure.`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Severity:`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`7.0`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`external/cwe/cwe-377`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Source: `}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/python/debug/examples/v1/debug_keras.py`} passHref={true}>
  {`tensorflow/python/debug/examples/v1/debug_keras.py:48`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -44,21 +44,20 @@ def main(_):</span>\n<span style='background-color: #ffffff;'>  44|<span style='color:red;'>44  </span>   sess = tf.Session()</span>\n<span style='background-color: #ffffff;'>  45|<span style='color:red;'>45  </span>   if FLAGS.debug:</span>\n<span style='background-color: #ffffff;'>  46|<span style='color:red;'>46  </span>     # Use the command-line interface (CLI) of tfdbg.</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>47  </span>-    config_file_path = (tempfile.mktemp('.tfdbg_config')</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>48  </span>-                        if FLAGS.use_random_config_path else None)</span>\n<span style='background-color: #ddffdd;'>  47|<span style='color:red;'>    </span>+    config_file_path = (</span>\n<span style='background-color: #ddffdd;'>  48|<span style='color:red;'>    </span>+        tempfile.mktemp('.tfdbg_config')</span>\n<span style='background-color: #ddffdd;'>  49|<span style='color:red;'>    </span>+        if FLAGS.use_random_config_path else None)</span>\n<span style='background-color: #ffffff;'>  50|<span style='color:red;'>49  </span>     sess = tf_debug.LocalCLIDebugWrapperSession(</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>50  </span>-        sess,</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>51  </span>-        ui_type=FLAGS.ui_type,</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>52  </span>-        config_file_path=config_file_path)</span>\n<span style='background-color: #ddffdd;'>  51|<span style='color:red;'>    </span>+        sess, ui_type=FLAGS.ui_type, config_file_path=config_file_path)</span>\n<span style='background-color: #ffffff;'>  52|<span style='color:red;'>53  </span>   elif FLAGS.tensorboard_debug_address:</span>\n<span style='background-color: #ffffff;'>  53|<span style='color:red;'>54  </span>     # Use the TensorBoard Debugger Plugin (GUI of tfdbg).</span>\n<span style='background-color: #ffffff;'>  54|<span style='color:red;'>55  </span>     sess = tf_debug.TensorBoardDebugWrapperSession(</span>\n<span style='background-color: #ffffff;'>  55|<span style='color:red;'>56  </span>         sess, FLAGS.tensorboard_debug_address)</span>\n<span style='background-color: #ffffff;'>  56|<span style='color:red;'>57  </span>   tf.keras.backend.set_session(sess)</span>\n<span style='background-color: #ffffff;'>  57|<span style='color:red;'>58  </span> </span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesButton css={{"background-color": "#0b082b", "color": "white", "border": "0", "border-radius": "30%"}}>
  {`✨`}
</RadixThemesButton>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_5da41868e3ec341271804d9cbaa2c138 () {



  return (
    <RadixAccordionItem className={`AccordionItem`} css={{"overflow": "hidden", "width": "100%", "marginTop": "1px", "borderTop": "var(--divider-px) solid var(--gray-a6)", "&:first-child": {"marginTop": 0, "borderTop": 0, "borderTopLeftRadius": "var(--radius-4)", "borderTopRightRadius": "var(--radius-4)"}, "&:last-child": {"borderBottomLeftRadius": "var(--radius-4)", "borderBottomRightRadius": "var(--radius-4)"}, "&:focus-within": {"position": "relative", "zIndex": 1}, "&:first-child[data-variant='ghost'], *:where([data-variant='ghost']) &:first-child": {"borderRadius": 0, "borderTop": "var(--divider-px) solid var(--gray-a6)"}, "&:last-child[data-variant='ghost'], *:where([data-variant='ghost']) &:last-child": {"borderRadius": 0, "borderBottom": "var(--divider-px) solid var(--gray-a6)"}}} value={generateUUID()}>
  <RadixAccordionHeader className={`AccordionHeader`} css={{"display": "flex"}}>
  <RadixAccordionTrigger className={`AccordionTrigger`} css={{"color": "var(--accent-11)", "fontSize": "1.1em", "lineHeight": 1, "justifyContent": "space-between", "alignItems": "center", "flex": 1, "display": "flex", "padding": "var(--space-3) var(--space-4)", "width": "100%", "boxShadow": "0 var(--divider-px) 0 var(--gray-a6)", "&[data-state='open'] > .AccordionChevron": {"transform": "rotate(180deg)"}, "&:hover": {"backgroundColor": "var(--accent-4)"}, "& > .AccordionChevron": {"transition": "transform var(--animation-duration) var(--animation-easing)"}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)", "&:hover": {"backgroundColor": "var(--accent-10)"}, "& > .AccordionChevron": {"color": "var(--accent-contrast)"}}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`py/insecure-temporary-file`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`introduced in commit`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/25ae36e5e22d7daef5bb1a90add63b1ea66d4eca`} passHref={true}>
  {`25ae36e5e`}
</NextLink>
</RadixThemesLink>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`by`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/caisq`} passHref={true}>
  {`caisq`}
</NextLink>
</RadixThemesLink>
</RadixThemesBox>
  <LucideChevronDownIcon className={`AccordionChevron`} css={{"color": "var(--current-color)"}}/>
</RadixAccordionTrigger>
</RadixAccordionHeader>
  <RadixAccordionContent className={`AccordionContent`} css={{"overflow": "hidden", "color": "var(--accent-11)", "paddingInlineStart": "var(--space-4)", "paddingInlineEnd": "var(--space-4)", "&:before, &:after": {"content": "' '", "display": "block", "height": "var(--space-3)"}, "&[data-state='open']": {"animation": `${slideDown} var(--animation-duration) var(--animation-easing)`}, "&[data-state='closed']": {"animation": `${slideUp} var(--animation-duration) var(--animation-easing)`}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)"}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Insecure temporary file: `}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`Creating a temporary file using this method may be insecure.`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Severity:`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`7.0`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`external/cwe/cwe-377`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Source: `}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/python/debug/local_cli_test.py`} passHref={true}>
  {`tensorflow/python/debug/local_cli_test.py:142`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -0,0 +1,72 @@</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesButton css={{"background-color": "#0b082b", "color": "white", "border": "0", "border-radius": "30%"}}>
  {`✨`}
</RadixThemesButton>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_66d327a2d184bc9c910f7437591d0dba () {



  return (
    <RadixAccordionItem className={`AccordionItem`} css={{"overflow": "hidden", "width": "100%", "marginTop": "1px", "borderTop": "var(--divider-px) solid var(--gray-a6)", "&:first-child": {"marginTop": 0, "borderTop": 0, "borderTopLeftRadius": "var(--radius-4)", "borderTopRightRadius": "var(--radius-4)"}, "&:last-child": {"borderBottomLeftRadius": "var(--radius-4)", "borderBottomRightRadius": "var(--radius-4)"}, "&:focus-within": {"position": "relative", "zIndex": 1}, "&:first-child[data-variant='ghost'], *:where([data-variant='ghost']) &:first-child": {"borderRadius": 0, "borderTop": "var(--divider-px) solid var(--gray-a6)"}, "&:last-child[data-variant='ghost'], *:where([data-variant='ghost']) &:last-child": {"borderRadius": 0, "borderBottom": "var(--divider-px) solid var(--gray-a6)"}}} value={generateUUID()}>
  <RadixAccordionHeader className={`AccordionHeader`} css={{"display": "flex"}}>
  <RadixAccordionTrigger className={`AccordionTrigger`} css={{"color": "var(--accent-11)", "fontSize": "1.1em", "lineHeight": 1, "justifyContent": "space-between", "alignItems": "center", "flex": 1, "display": "flex", "padding": "var(--space-3) var(--space-4)", "width": "100%", "boxShadow": "0 var(--divider-px) 0 var(--gray-a6)", "&[data-state='open'] > .AccordionChevron": {"transform": "rotate(180deg)"}, "&:hover": {"backgroundColor": "var(--accent-4)"}, "& > .AccordionChevron": {"transition": "transform var(--animation-duration) var(--animation-easing)"}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)", "&:hover": {"backgroundColor": "var(--accent-10)"}, "& > .AccordionChevron": {"color": "var(--accent-contrast)"}}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`py/insecure-temporary-file`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`introduced in commit`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/0b15439f8f0f2d4755587f4096c3ea04cb199d23`} passHref={true}>
  {`0b15439f8`}
</NextLink>
</RadixThemesLink>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`by`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/aselle`} passHref={true}>
  {`aselle`}
</NextLink>
</RadixThemesLink>
</RadixThemesBox>
  <LucideChevronDownIcon className={`AccordionChevron`} css={{"color": "var(--current-color)"}}/>
</RadixAccordionTrigger>
</RadixAccordionHeader>
  <RadixAccordionContent className={`AccordionContent`} css={{"overflow": "hidden", "color": "var(--accent-11)", "paddingInlineStart": "var(--space-4)", "paddingInlineEnd": "var(--space-4)", "&:before, &:after": {"content": "' '", "display": "block", "height": "var(--space-3)"}, "&[data-state='open']": {"animation": `${slideDown} var(--animation-duration) var(--animation-easing)`}, "&[data-state='closed']": {"animation": `${slideUp} var(--animation-duration) var(--animation-easing)`}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)"}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Insecure temporary file: `}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`Creating a temporary file using this method may be insecure.`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Severity:`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`7.0`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`external/cwe/cwe-377`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Source: `}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/contrib/lite/schema/upgrade_schema_test.py`} passHref={true}>
  {`tensorflow/contrib/lite/schema/upgrade_schema_test.py:263`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    \n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesButton css={{"background-color": "#0b082b", "color": "white", "border": "0", "border-radius": "30%"}}>
  {`✨`}
</RadixThemesButton>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_fb620ecaa90759a7738325d04c4630ca () {



  return (
    <RadixAccordionItem className={`AccordionItem`} css={{"overflow": "hidden", "width": "100%", "marginTop": "1px", "borderTop": "var(--divider-px) solid var(--gray-a6)", "&:first-child": {"marginTop": 0, "borderTop": 0, "borderTopLeftRadius": "var(--radius-4)", "borderTopRightRadius": "var(--radius-4)"}, "&:last-child": {"borderBottomLeftRadius": "var(--radius-4)", "borderBottomRightRadius": "var(--radius-4)"}, "&:focus-within": {"position": "relative", "zIndex": 1}, "&:first-child[data-variant='ghost'], *:where([data-variant='ghost']) &:first-child": {"borderRadius": 0, "borderTop": "var(--divider-px) solid var(--gray-a6)"}, "&:last-child[data-variant='ghost'], *:where([data-variant='ghost']) &:last-child": {"borderRadius": 0, "borderBottom": "var(--divider-px) solid var(--gray-a6)"}}} value={generateUUID()}>
  <RadixAccordionHeader className={`AccordionHeader`} css={{"display": "flex"}}>
  <RadixAccordionTrigger className={`AccordionTrigger`} css={{"color": "var(--accent-11)", "fontSize": "1.1em", "lineHeight": 1, "justifyContent": "space-between", "alignItems": "center", "flex": 1, "display": "flex", "padding": "var(--space-3) var(--space-4)", "width": "100%", "boxShadow": "0 var(--divider-px) 0 var(--gray-a6)", "&[data-state='open'] > .AccordionChevron": {"transform": "rotate(180deg)"}, "&:hover": {"backgroundColor": "var(--accent-4)"}, "& > .AccordionChevron": {"transition": "transform var(--animation-duration) var(--animation-easing)"}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)", "&:hover": {"backgroundColor": "var(--accent-10)"}, "& > .AccordionChevron": {"color": "var(--accent-contrast)"}}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`py/insecure-temporary-file`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`introduced in commit`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/25ae36e5e22d7daef5bb1a90add63b1ea66d4eca`} passHref={true}>
  {`25ae36e5e`}
</NextLink>
</RadixThemesLink>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`by`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/caisq`} passHref={true}>
  {`caisq`}
</NextLink>
</RadixThemesLink>
</RadixThemesBox>
  <LucideChevronDownIcon className={`AccordionChevron`} css={{"color": "var(--current-color)"}}/>
</RadixAccordionTrigger>
</RadixAccordionHeader>
  <RadixAccordionContent className={`AccordionContent`} css={{"overflow": "hidden", "color": "var(--accent-11)", "paddingInlineStart": "var(--space-4)", "paddingInlineEnd": "var(--space-4)", "&:before, &:after": {"content": "' '", "display": "block", "height": "var(--space-3)"}, "&[data-state='open']": {"animation": `${slideDown} var(--animation-duration) var(--animation-easing)`}, "&[data-state='closed']": {"animation": `${slideUp} var(--animation-duration) var(--animation-easing)`}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)"}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Insecure temporary file: `}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`Creating a temporary file using this method may be insecure.`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Severity:`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`7.0`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`external/cwe/cwe-377`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Source: `}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/python/debug/local_cli_test.py`} passHref={true}>
  {`tensorflow/python/debug/local_cli_test.py:87`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -0,0 +1,72 @@</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesButton css={{"background-color": "#0b082b", "color": "white", "border": "0", "border-radius": "30%"}}>
  {`✨`}
</RadixThemesButton>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_d60f42ac3ae60a135910dbb38f572d32 () {



  return (
    <RadixAccordionItem className={`AccordionItem`} css={{"overflow": "hidden", "width": "100%", "marginTop": "1px", "borderTop": "var(--divider-px) solid var(--gray-a6)", "&:first-child": {"marginTop": 0, "borderTop": 0, "borderTopLeftRadius": "var(--radius-4)", "borderTopRightRadius": "var(--radius-4)"}, "&:last-child": {"borderBottomLeftRadius": "var(--radius-4)", "borderBottomRightRadius": "var(--radius-4)"}, "&:focus-within": {"position": "relative", "zIndex": 1}, "&:first-child[data-variant='ghost'], *:where([data-variant='ghost']) &:first-child": {"borderRadius": 0, "borderTop": "var(--divider-px) solid var(--gray-a6)"}, "&:last-child[data-variant='ghost'], *:where([data-variant='ghost']) &:last-child": {"borderRadius": 0, "borderBottom": "var(--divider-px) solid var(--gray-a6)"}}} value={generateUUID()}>
  <RadixAccordionHeader className={`AccordionHeader`} css={{"display": "flex"}}>
  <RadixAccordionTrigger className={`AccordionTrigger`} css={{"color": "var(--accent-11)", "fontSize": "1.1em", "lineHeight": 1, "justifyContent": "space-between", "alignItems": "center", "flex": 1, "display": "flex", "padding": "var(--space-3) var(--space-4)", "width": "100%", "boxShadow": "0 var(--divider-px) 0 var(--gray-a6)", "&[data-state='open'] > .AccordionChevron": {"transform": "rotate(180deg)"}, "&:hover": {"backgroundColor": "var(--accent-4)"}, "& > .AccordionChevron": {"transition": "transform var(--animation-duration) var(--animation-easing)"}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)", "&:hover": {"backgroundColor": "var(--accent-10)"}, "& > .AccordionChevron": {"color": "var(--accent-contrast)"}}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`py/insecure-temporary-file`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`introduced in commit`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/d25dd807485c6e57a200fcf9622a974f24ad1a2f`} passHref={true}>
  {`d25dd807485c`}
</NextLink>
</RadixThemesLink>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`by`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflower-gardener`} passHref={true}>
  {`tensorflower-gardener`}
</NextLink>
</RadixThemesLink>
</RadixThemesBox>
  <LucideChevronDownIcon className={`AccordionChevron`} css={{"color": "var(--current-color)"}}/>
</RadixAccordionTrigger>
</RadixAccordionHeader>
  <RadixAccordionContent className={`AccordionContent`} css={{"overflow": "hidden", "color": "var(--accent-11)", "paddingInlineStart": "var(--space-4)", "paddingInlineEnd": "var(--space-4)", "&:before, &:after": {"content": "' '", "display": "block", "height": "var(--space-3)"}, "&[data-state='open']": {"animation": `${slideDown} var(--animation-duration) var(--animation-easing)`}, "&[data-state='closed']": {"animation": `${slideUp} var(--animation-duration) var(--animation-easing)`}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)"}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Insecure temporary file: `}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`Creating a temporary file using this method may be insecure.`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Severity:`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`7.0`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`external/cwe/cwe-377`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Source: `}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/compiler/mlir/tensorflow/tests/tf_saved_model/common_v1.py`} passHref={true}>
  {`tensorflow/compiler/mlir/tensorflow/tests/tf_saved_model/common_v1.py:71`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -0,0 +1,93 @@</span>\n<span style='background-color: #ddffdd;'>  62|<span style='color:red;'>    </span>+  logging.set_stderrthreshold('error')</span>\n<span style='background-color: #ddffdd;'>  63|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'>  64|<span style='color:red;'>    </span>+  def app_main(argv):</span>\n<span style='background-color: #ddffdd;'>  65|<span style='color:red;'>    </span>+    '''Function passed to absl.app.run.'''</span>\n<span style='background-color: #ddffdd;'>  66|<span style='color:red;'>    </span>+    if len(argv) > 1:</span>\n<span style='background-color: #ddffdd;'>  67|<span style='color:red;'>    </span>+      raise app.UsageError('Too many command-line arguments.')</span>\n<span style='background-color: #ddffdd;'>  68|<span style='color:red;'>    </span>+    if FLAGS.save_model_path:</span>\n<span style='background-color: #ddffdd;'>  69|<span style='color:red;'>    </span>+      save_model_path = FLAGS.save_model_path</span>\n<span style='background-color: #ddffdd;'>  70|<span style='color:red;'>    </span>+    else:</span>\n<span style='background-color: #ddffdd;'>  71|<span style='color:red;'>    </span>+      save_model_path = tempfile.mktemp(suffix='.saved_model')</span>\n<span style='background-color: #ddffdd;'>  72|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'>  73|<span style='color:red;'>    </span>+    sess = tf.Session()</span>\n<span style='background-color: #ddffdd;'>  74|<span style='color:red;'>    </span>+    sess.run(tf.initializers.global_variables())</span>\n<span style='background-color: #ddffdd;'>  75|<span style='color:red;'>    </span>+    builder = tf.saved_model.builder.SavedModelBuilder(save_model_path)</span>\n<span style='background-color: #ddffdd;'>  76|<span style='color:red;'>    </span>+    builder.add_meta_graph_and_variables(</span>\n<span style='background-color: #ddffdd;'>  77|<span style='color:red;'>    </span>+        sess, [tf.saved_model.tag_constants.SERVING],</span>\n<span style='background-color: #ddffdd;'>  78|<span style='color:red;'>    </span>+        signature_def_map,</span>\n<span style='background-color: #ddffdd;'>  79|<span style='color:red;'>    </span>+        strip_default_attrs=True)</span>\n<span style='background-color: #ddffdd;'>  80|<span style='color:red;'>    </span>+    builder.save()</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesButton css={{"background-color": "#0b082b", "color": "white", "border": "0", "border-radius": "30%"}}>
  {`✨`}
</RadixThemesButton>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Div_ac2a89ea84667d600a059f034bd91dfe () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <div css={{"position": "fixed", "width": "100vw", "height": "0"}} title={`Connection Error: ${(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}`}>
  <Fragment_cf53a535ae2e610a113dd361eb6ac95b/>
</div>
  )
}

export function Item_8b6b9affd183708d6e1035ec0a98068b () {



  return (
    <RadixAccordionItem className={`AccordionItem`} css={{"overflow": "hidden", "width": "100%", "marginTop": "1px", "borderTop": "var(--divider-px) solid var(--gray-a6)", "&:first-child": {"marginTop": 0, "borderTop": 0, "borderTopLeftRadius": "var(--radius-4)", "borderTopRightRadius": "var(--radius-4)"}, "&:last-child": {"borderBottomLeftRadius": "var(--radius-4)", "borderBottomRightRadius": "var(--radius-4)"}, "&:focus-within": {"position": "relative", "zIndex": 1}, "&:first-child[data-variant='ghost'], *:where([data-variant='ghost']) &:first-child": {"borderRadius": 0, "borderTop": "var(--divider-px) solid var(--gray-a6)"}, "&:last-child[data-variant='ghost'], *:where([data-variant='ghost']) &:last-child": {"borderRadius": 0, "borderBottom": "var(--divider-px) solid var(--gray-a6)"}}} value={generateUUID()}>
  <RadixAccordionHeader className={`AccordionHeader`} css={{"display": "flex"}}>
  <RadixAccordionTrigger className={`AccordionTrigger`} css={{"color": "var(--accent-11)", "fontSize": "1.1em", "lineHeight": 1, "justifyContent": "space-between", "alignItems": "center", "flex": 1, "display": "flex", "padding": "var(--space-3) var(--space-4)", "width": "100%", "boxShadow": "0 var(--divider-px) 0 var(--gray-a6)", "&[data-state='open'] > .AccordionChevron": {"transform": "rotate(180deg)"}, "&:hover": {"backgroundColor": "var(--accent-4)"}, "& > .AccordionChevron": {"transition": "transform var(--animation-duration) var(--animation-easing)"}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)", "&:hover": {"backgroundColor": "var(--accent-10)"}, "& > .AccordionChevron": {"color": "var(--accent-contrast)"}}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`py/insecure-temporary-file`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`introduced in commit`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/3a6181ae34e73301247553983b406c8e01539b01`} passHref={true}>
  {`3a6181ae3`}
</NextLink>
</RadixThemesLink>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`by`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflower-gardener`} passHref={true}>
  {`tensorflower-gardener`}
</NextLink>
</RadixThemesLink>
</RadixThemesBox>
  <LucideChevronDownIcon className={`AccordionChevron`} css={{"color": "var(--current-color)"}}/>
</RadixAccordionTrigger>
</RadixAccordionHeader>
  <RadixAccordionContent className={`AccordionContent`} css={{"overflow": "hidden", "color": "var(--accent-11)", "paddingInlineStart": "var(--space-4)", "paddingInlineEnd": "var(--space-4)", "&:before, &:after": {"content": "' '", "display": "block", "height": "var(--space-3)"}, "&[data-state='open']": {"animation": `${slideDown} var(--animation-duration) var(--animation-easing)`}, "&[data-state='closed']": {"animation": `${slideUp} var(--animation-duration) var(--animation-easing)`}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)"}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Insecure temporary file: `}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`Creating a temporary file using this method may be insecure.`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Severity:`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`7.0`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`external/cwe/cwe-377`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Source: `}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/python/saved_model/load_test.py`} passHref={true}>
  {`tensorflow/python/saved_model/load_test.py:197`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -19,11 +19,13 @@</span>\n<span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -46,6 +48,37 @@ def test_structure_import(self):</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesButton css={{"background-color": "#0b082b", "color": "white", "border": "0", "border-radius": "30%"}}>
  {`✨`}
</RadixThemesButton>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_0d638539f1a7d00161f591b1599824e9 () {



  return (
    <RadixAccordionItem className={`AccordionItem`} css={{"overflow": "hidden", "width": "100%", "marginTop": "1px", "borderTop": "var(--divider-px) solid var(--gray-a6)", "&:first-child": {"marginTop": 0, "borderTop": 0, "borderTopLeftRadius": "var(--radius-4)", "borderTopRightRadius": "var(--radius-4)"}, "&:last-child": {"borderBottomLeftRadius": "var(--radius-4)", "borderBottomRightRadius": "var(--radius-4)"}, "&:focus-within": {"position": "relative", "zIndex": 1}, "&:first-child[data-variant='ghost'], *:where([data-variant='ghost']) &:first-child": {"borderRadius": 0, "borderTop": "var(--divider-px) solid var(--gray-a6)"}, "&:last-child[data-variant='ghost'], *:where([data-variant='ghost']) &:last-child": {"borderRadius": 0, "borderBottom": "var(--divider-px) solid var(--gray-a6)"}}} value={generateUUID()}>
  <RadixAccordionHeader className={`AccordionHeader`} css={{"display": "flex"}}>
  <RadixAccordionTrigger className={`AccordionTrigger`} css={{"color": "var(--accent-11)", "fontSize": "1.1em", "lineHeight": 1, "justifyContent": "space-between", "alignItems": "center", "flex": 1, "display": "flex", "padding": "var(--space-3) var(--space-4)", "width": "100%", "boxShadow": "0 var(--divider-px) 0 var(--gray-a6)", "&[data-state='open'] > .AccordionChevron": {"transform": "rotate(180deg)"}, "&:hover": {"backgroundColor": "var(--accent-4)"}, "& > .AccordionChevron": {"transition": "transform var(--animation-duration) var(--animation-easing)"}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)", "&:hover": {"backgroundColor": "var(--accent-10)"}, "& > .AccordionChevron": {"color": "var(--accent-contrast)"}}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`py/insecure-temporary-file`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`introduced in commit`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/1cf9f7ab2fd019531629b266e7d0863b0d6417ce`} passHref={true}>
  {`1cf9f7ab2`}
</NextLink>
</RadixThemesLink>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`by`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/caisq`} passHref={true}>
  {`caisq`}
</NextLink>
</RadixThemesLink>
</RadixThemesBox>
  <LucideChevronDownIcon className={`AccordionChevron`} css={{"color": "var(--current-color)"}}/>
</RadixAccordionTrigger>
</RadixAccordionHeader>
  <RadixAccordionContent className={`AccordionContent`} css={{"overflow": "hidden", "color": "var(--accent-11)", "paddingInlineStart": "var(--space-4)", "paddingInlineEnd": "var(--space-4)", "&:before, &:after": {"content": "' '", "display": "block", "height": "var(--space-3)"}, "&[data-state='open']": {"animation": `${slideDown} var(--animation-duration) var(--animation-easing)`}, "&[data-state='closed']": {"animation": `${slideUp} var(--animation-duration) var(--animation-easing)`}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)"}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Insecure temporary file: `}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`Creating a temporary file using this method may be insecure.`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Severity:`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`7.0`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`external/cwe/cwe-377`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Source: `}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/python/debug/cli/readline_ui_test.py`} passHref={true}>
  {`tensorflow/python/debug/cli/readline_ui_test.py:40`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -20,6 +20,7 @@</span>\n<span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -32,7 +33,9 @@ class MockReadlineUI(readline_ui.ReadlineUI):</span>\n<span style='background-color: #ffffff;'>  33|<span style='color:red;'>32  </span>   '''Test subclass of ReadlineUI that bypasses terminal manipulations.'''</span>\n<span style='background-color: #ffffff;'>  34|<span style='color:red;'>33  </span> </span>\n<span style='background-color: #ffffff;'>  35|<span style='color:red;'>34  </span>   def __init__(self, on_ui_exit=None, command_sequence=None):</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>35  </span>-    readline_ui.ReadlineUI.__init__(self, on_ui_exit=on_ui_exit)</span>\n<span style='background-color: #ddffdd;'>  36|<span style='color:red;'>    </span>+    readline_ui.ReadlineUI.__init__(</span>\n<span style='background-color: #ddffdd;'>  37|<span style='color:red;'>    </span>+        self, on_ui_exit=on_ui_exit,</span>\n<span style='background-color: #ddffdd;'>  38|<span style='color:red;'>    </span>+        config=cli_config.CLIConfig(config_file_path=tempfile.mktemp()))</span>\n<span style='background-color: #ffffff;'>  39|<span style='color:red;'>36  </span> </span>\n<span style='background-color: #ffffff;'>  40|<span style='color:red;'>37  </span>     self._command_sequence = command_sequence</span>\n<span style='background-color: #ffffff;'>  41|<span style='color:red;'>38  </span>     self._command_counter = 0</span>\n<span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -161,6 +164,18 @@ def testIncompleteRedirectWorks(self):</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesButton css={{"background-color": "#0b082b", "color": "white", "border": "0", "border-radius": "30%"}}>
  {`✨`}
</RadixThemesButton>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_66a5f1afad9d270a22c309f31678c22f () {



  return (
    <RadixAccordionItem className={`AccordionItem`} css={{"overflow": "hidden", "width": "100%", "marginTop": "1px", "borderTop": "var(--divider-px) solid var(--gray-a6)", "&:first-child": {"marginTop": 0, "borderTop": 0, "borderTopLeftRadius": "var(--radius-4)", "borderTopRightRadius": "var(--radius-4)"}, "&:last-child": {"borderBottomLeftRadius": "var(--radius-4)", "borderBottomRightRadius": "var(--radius-4)"}, "&:focus-within": {"position": "relative", "zIndex": 1}, "&:first-child[data-variant='ghost'], *:where([data-variant='ghost']) &:first-child": {"borderRadius": 0, "borderTop": "var(--divider-px) solid var(--gray-a6)"}, "&:last-child[data-variant='ghost'], *:where([data-variant='ghost']) &:last-child": {"borderRadius": 0, "borderBottom": "var(--divider-px) solid var(--gray-a6)"}}} value={generateUUID()}>
  <RadixAccordionHeader className={`AccordionHeader`} css={{"display": "flex"}}>
  <RadixAccordionTrigger className={`AccordionTrigger`} css={{"color": "var(--accent-11)", "fontSize": "1.1em", "lineHeight": 1, "justifyContent": "space-between", "alignItems": "center", "flex": 1, "display": "flex", "padding": "var(--space-3) var(--space-4)", "width": "100%", "boxShadow": "0 var(--divider-px) 0 var(--gray-a6)", "&[data-state='open'] > .AccordionChevron": {"transform": "rotate(180deg)"}, "&:hover": {"backgroundColor": "var(--accent-4)"}, "& > .AccordionChevron": {"transition": "transform var(--animation-duration) var(--animation-easing)"}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)", "&:hover": {"backgroundColor": "var(--accent-10)"}, "& > .AccordionChevron": {"color": "var(--accent-contrast)"}}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`py/insecure-temporary-file`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`introduced in commit`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/a698a494b0691523d1bf75e907f85a7ed73b6858`} passHref={true}>
  {`a698a494b`}
</NextLink>
</RadixThemesLink>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`by`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/jpienaar`} passHref={true}>
  {`jpienaar`}
</NextLink>
</RadixThemesLink>
</RadixThemesBox>
  <LucideChevronDownIcon className={`AccordionChevron`} css={{"color": "var(--current-color)"}}/>
</RadixAccordionTrigger>
</RadixAccordionHeader>
  <RadixAccordionContent className={`AccordionContent`} css={{"overflow": "hidden", "color": "var(--accent-11)", "paddingInlineStart": "var(--space-4)", "paddingInlineEnd": "var(--space-4)", "&:before, &:after": {"content": "' '", "display": "block", "height": "var(--space-3)"}, "&[data-state='open']": {"animation": `${slideDown} var(--animation-duration) var(--animation-easing)`}, "&[data-state='closed']": {"animation": `${slideUp} var(--animation-duration) var(--animation-easing)`}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)"}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Insecure temporary file: `}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`Creating a temporary file using this method may be insecure.`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Severity:`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`7.0`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`external/cwe/cwe-377`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Source: `}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/compiler/mlir/tensorflow/tests/tf_saved_model/common.py`} passHref={true}>
  {`tensorflow/compiler/mlir/tensorflow/tests/tf_saved_model/common.py:82`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -22,6 +22,7 @@</span>\n<span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -30,7 +31,7 @@</span>\n<span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -74,7 +75,10 @@ def app_main(argv):</span>\n<span style='background-color: #ffffff;'>  75|<span style='color:red;'>74  </span>     '''Function passed to absl.app.run.'''</span>\n<span style='background-color: #ffffff;'>  76|<span style='color:red;'>75  </span>     if len(argv) > 1:</span>\n<span style='background-color: #ffffff;'>  77|<span style='color:red;'>76  </span>       raise app.UsageError('Too many command-line arguments.')</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>77  </span>-    save_model_path = FLAGS.save_model_path</span>\n<span style='background-color: #ddffdd;'>  78|<span style='color:red;'>    </span>+    if FLAGS.save_model_path:</span>\n<span style='background-color: #ddffdd;'>  79|<span style='color:red;'>    </span>+      save_model_path = FLAGS.save_model_path</span>\n<span style='background-color: #ddffdd;'>  80|<span style='color:red;'>    </span>+    else:</span>\n<span style='background-color: #ddffdd;'>  81|<span style='color:red;'>    </span>+      save_model_path = tempfile.mktemp(suffix='.saved_model')</span>\n<span style='background-color: #ffffff;'>  82|<span style='color:red;'>78  </span>     save_options = tf.saved_model.SaveOptions(save_debug_info=show_debug_info)</span>\n<span style='background-color: #ffffff;'>  83|<span style='color:red;'>79  </span>     tf.saved_model.save(</span>\n<span style='background-color: #ffffff;'>  84|<span style='color:red;'>80  </span>         create_module_fn(), save_model_path, options=save_options)</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesButton css={{"background-color": "#0b082b", "color": "white", "border": "0", "border-radius": "30%"}}>
  {`✨`}
</RadixThemesButton>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

const slideDown = keyframes`
from {
  height: 0;
}
to {
  height: var(--radix-accordion-content-height);
}
`
const slideUp = keyframes`
from {
  height: var(--radix-accordion-content-height);
}
to {
  height: 0;
}
`


export function Item_5be9e2d11e1fbb60ad160ecc050ad0af () {



  return (
    <RadixAccordionItem className={`AccordionItem`} css={{"overflow": "hidden", "width": "100%", "marginTop": "1px", "borderTop": "var(--divider-px) solid var(--gray-a6)", "&:first-child": {"marginTop": 0, "borderTop": 0, "borderTopLeftRadius": "var(--radius-4)", "borderTopRightRadius": "var(--radius-4)"}, "&:last-child": {"borderBottomLeftRadius": "var(--radius-4)", "borderBottomRightRadius": "var(--radius-4)"}, "&:focus-within": {"position": "relative", "zIndex": 1}, "&:first-child[data-variant='ghost'], *:where([data-variant='ghost']) &:first-child": {"borderRadius": 0, "borderTop": "var(--divider-px) solid var(--gray-a6)"}, "&:last-child[data-variant='ghost'], *:where([data-variant='ghost']) &:last-child": {"borderRadius": 0, "borderBottom": "var(--divider-px) solid var(--gray-a6)"}}} value={generateUUID()}>
  <RadixAccordionHeader className={`AccordionHeader`} css={{"display": "flex"}}>
  <RadixAccordionTrigger className={`AccordionTrigger`} css={{"color": "var(--accent-11)", "fontSize": "1.1em", "lineHeight": 1, "justifyContent": "space-between", "alignItems": "center", "flex": 1, "display": "flex", "padding": "var(--space-3) var(--space-4)", "width": "100%", "boxShadow": "0 var(--divider-px) 0 var(--gray-a6)", "&[data-state='open'] > .AccordionChevron": {"transform": "rotate(180deg)"}, "&:hover": {"backgroundColor": "var(--accent-4)"}, "& > .AccordionChevron": {"transition": "transform var(--animation-duration) var(--animation-easing)"}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)", "&:hover": {"backgroundColor": "var(--accent-10)"}, "& > .AccordionChevron": {"color": "var(--accent-contrast)"}}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`py/tarslip`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`introduced in commit`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/da5091bf507b8282c798343cdff87e1e23a6549b`} passHref={true}>
  {`da5091bf5`}
</NextLink>
</RadixThemesLink>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`by`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/fwcore`} passHref={true}>
  {`fwcore`}
</NextLink>
</RadixThemesLink>
</RadixThemesBox>
  <LucideChevronDownIcon className={`AccordionChevron`} css={{"color": "var(--current-color)"}}/>
</RadixAccordionTrigger>
</RadixAccordionHeader>
  <RadixAccordionContent className={`AccordionContent`} css={{"overflow": "hidden", "color": "var(--accent-11)", "paddingInlineStart": "var(--space-4)", "paddingInlineEnd": "var(--space-4)", "&:before, &:after": {"content": "' '", "display": "block", "height": "var(--space-3)"}, "&[data-state='open']": {"animation": `${slideDown} var(--animation-duration) var(--animation-easing)`}, "&[data-state='closed']": {"animation": `${slideUp} var(--animation-duration) var(--animation-easing)`}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)"}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Arbitrary file write during tarfile extraction: `}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`Extracting files from a malicious tar archive without validating that the
              destination file path is within the destination directory can cause files outside
              the destination directory to be overwritten.`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Severity:`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`7.5`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`security`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Source: `}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/examples/speech_commands/input_data.py`} passHref={true}>
  {`tensorflow/examples/speech_commands/input_data.py:245`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -240,7 +240,7 @@ def _progress(count, block_size, total_size):</span>\n<span style='background-color: #ffffff;'> 240|<span style='color:red;'>240 </span>       statinfo = os.stat(filepath)</span>\n<span style='background-color: #ffffff;'> 241|<span style='color:red;'>241 </span>       tf.compat.v1.logging.info('Successfully downloaded %s (%d bytes)',</span>\n<span style='background-color: #ffffff;'> 242|<span style='color:red;'>242 </span>                                 filename, statinfo.st_size)</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>243 </span>-    tarfile.open(filepath, 'r:gz').extractall(dest_directory)</span>\n<span style='background-color: #ddffdd;'> 243|<span style='color:red;'>    </span>+      tarfile.open(filepath, 'r:gz').extractall(dest_directory)</span>\n<span style='background-color: #ffffff;'> 244|<span style='color:red;'>244 </span> </span>\n<span style='background-color: #ffffff;'> 245|<span style='color:red;'>245 </span>   def prepare_data_index(self, silence_percentage, unknown_percentage,</span>\n<span style='background-color: #ffffff;'> 246|<span style='color:red;'>246 </span>                          wanted_words, validation_percentage,</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesButton css={{"background-color": "#0b082b", "color": "white", "border": "0", "border-radius": "30%"}}>
  {`✨`}
</RadixThemesButton>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_554ae6257e668de854e73a3137b89b54 () {



  return (
    <RadixAccordionItem className={`AccordionItem`} css={{"overflow": "hidden", "width": "100%", "marginTop": "1px", "borderTop": "var(--divider-px) solid var(--gray-a6)", "&:first-child": {"marginTop": 0, "borderTop": 0, "borderTopLeftRadius": "var(--radius-4)", "borderTopRightRadius": "var(--radius-4)"}, "&:last-child": {"borderBottomLeftRadius": "var(--radius-4)", "borderBottomRightRadius": "var(--radius-4)"}, "&:focus-within": {"position": "relative", "zIndex": 1}, "&:first-child[data-variant='ghost'], *:where([data-variant='ghost']) &:first-child": {"borderRadius": 0, "borderTop": "var(--divider-px) solid var(--gray-a6)"}, "&:last-child[data-variant='ghost'], *:where([data-variant='ghost']) &:last-child": {"borderRadius": 0, "borderBottom": "var(--divider-px) solid var(--gray-a6)"}}} value={generateUUID()}>
  <RadixAccordionHeader className={`AccordionHeader`} css={{"display": "flex"}}>
  <RadixAccordionTrigger className={`AccordionTrigger`} css={{"color": "var(--accent-11)", "fontSize": "1.1em", "lineHeight": 1, "justifyContent": "space-between", "alignItems": "center", "flex": 1, "display": "flex", "padding": "var(--space-3) var(--space-4)", "width": "100%", "boxShadow": "0 var(--divider-px) 0 var(--gray-a6)", "&[data-state='open'] > .AccordionChevron": {"transform": "rotate(180deg)"}, "&:hover": {"backgroundColor": "var(--accent-4)"}, "& > .AccordionChevron": {"transition": "transform var(--animation-duration) var(--animation-easing)"}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)", "&:hover": {"backgroundColor": "var(--accent-10)"}, "& > .AccordionChevron": {"color": "var(--accent-contrast)"}}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6b20f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`py/overly-permissive-file`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`introduced in commit`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/c1731614e10e5b2a8e77f1ee4565b3185541483c`} passHref={true}>
  {`c1731614e`}
</NextLink>
</RadixThemesLink>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`by`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/yongtang`} passHref={true}>
  {`yongtang`}
</NextLink>
</RadixThemesLink>
</RadixThemesBox>
  <LucideChevronDownIcon className={`AccordionChevron`} css={{"color": "var(--current-color)"}}/>
</RadixAccordionTrigger>
</RadixAccordionHeader>
  <RadixAccordionContent className={`AccordionContent`} css={{"overflow": "hidden", "color": "var(--accent-11)", "paddingInlineStart": "var(--space-4)", "paddingInlineEnd": "var(--space-4)", "&:before, &:after": {"content": "' '", "display": "block", "height": "var(--space-3)"}, "&[data-state='open']": {"animation": `${slideDown} var(--animation-duration) var(--animation-easing)`}, "&[data-state='closed']": {"animation": `${slideUp} var(--animation-duration) var(--animation-easing)`}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)"}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Overly permissive file permissions: `}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`Allowing files to be readable or writable by users other than the owner may allow sensitive information to be accessed.`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Severity:`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6b20f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`7.8`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6b20f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`external/cwe/cwe-732`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Source: `}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/python/lib/io/file_io_test.py`} passHref={true}>
  {`tensorflow/python/lib/io/file_io_test.py:610`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -23,7 +23,9 @@</span>\n<span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -582,5 +584,31 @@ def testFileCrc32Binary(self):</span>\n<span style='background-color: #ddffdd;'> 601|<span style='color:red;'>    </span>+    file_path = os.path.join(noread_path, 'file4.txt')</span>\n<span style='background-color: #ddffdd;'> 602|<span style='color:red;'>    </span>+    file_io.FileIO(file_path, mode='w').write('testing')</span>\n<span style='background-color: #ddffdd;'> 603|<span style='color:red;'>    </span>+    # Change noread to noread access.</span>\n<span style='background-color: #ddffdd;'> 604|<span style='color:red;'>    </span>+    os.chmod(noread_path, 0)</span>\n<span style='background-color: #ddffdd;'> 605|<span style='color:red;'>    </span>+    expected_match = [compat.as_bytes(dir_path)]</span>\n<span style='background-color: #ddffdd;'> 606|<span style='color:red;'>    </span>+    with self.test_session() as sess:</span>\n<span style='background-color: #ddffdd;'> 607|<span style='color:red;'>    </span>+      self.assertItemsEqual(</span>\n<span style='background-color: #ddffdd;'> 608|<span style='color:red;'>    </span>+          gen_io_ops.matching_files(dir_path).eval(), expected_match)</span>\n<span style='background-color: #ddffdd;'> 609|<span style='color:red;'>    </span>+    # Change noread back so that it could be cleaned during tearDown.</span>\n<span style='background-color: #ddffdd;'> 610|<span style='color:red;'>    </span>+    os.chmod(noread_path, 0o777)</span>\n<span style='background-color: #ddffdd;'> 611|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'> 612|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ffffff;'> 613|<span style='color:red;'>585 </span> if __name__ == '__main__':</span>\n<span style='background-color: #ffffff;'> 614|<span style='color:red;'>586 </span>   test.main()</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesButton css={{"background-color": "#0b082b", "color": "white", "border": "0", "border-radius": "30%"}}>
  {`✨`}
</RadixThemesButton>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_782bffc3187b7e67b6db9a94a1cc532c () {



  return (
    <RadixAccordionItem className={`AccordionItem`} css={{"overflow": "hidden", "width": "100%", "marginTop": "1px", "borderTop": "var(--divider-px) solid var(--gray-a6)", "&:first-child": {"marginTop": 0, "borderTop": 0, "borderTopLeftRadius": "var(--radius-4)", "borderTopRightRadius": "var(--radius-4)"}, "&:last-child": {"borderBottomLeftRadius": "var(--radius-4)", "borderBottomRightRadius": "var(--radius-4)"}, "&:focus-within": {"position": "relative", "zIndex": 1}, "&:first-child[data-variant='ghost'], *:where([data-variant='ghost']) &:first-child": {"borderRadius": 0, "borderTop": "var(--divider-px) solid var(--gray-a6)"}, "&:last-child[data-variant='ghost'], *:where([data-variant='ghost']) &:last-child": {"borderRadius": 0, "borderBottom": "var(--divider-px) solid var(--gray-a6)"}}} value={generateUUID()}>
  <RadixAccordionHeader className={`AccordionHeader`} css={{"display": "flex"}}>
  <RadixAccordionTrigger className={`AccordionTrigger`} css={{"color": "var(--accent-11)", "fontSize": "1.1em", "lineHeight": 1, "justifyContent": "space-between", "alignItems": "center", "flex": 1, "display": "flex", "padding": "var(--space-3) var(--space-4)", "width": "100%", "boxShadow": "0 var(--divider-px) 0 var(--gray-a6)", "&[data-state='open'] > .AccordionChevron": {"transform": "rotate(180deg)"}, "&:hover": {"backgroundColor": "var(--accent-4)"}, "& > .AccordionChevron": {"transition": "transform var(--animation-duration) var(--animation-easing)"}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)", "&:hover": {"backgroundColor": "var(--accent-10)"}, "& > .AccordionChevron": {"color": "var(--accent-contrast)"}}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`py/insecure-temporary-file`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`introduced in commit`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/c96841dbd199d3c1a15a89e8c44c7c1d164968b9`} passHref={true}>
  {`c96841dbd`}
</NextLink>
</RadixThemesLink>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`by`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflower-gardener`} passHref={true}>
  {`tensorflower-gardener`}
</NextLink>
</RadixThemesLink>
</RadixThemesBox>
  <LucideChevronDownIcon className={`AccordionChevron`} css={{"color": "var(--current-color)"}}/>
</RadixAccordionTrigger>
</RadixAccordionHeader>
  <RadixAccordionContent className={`AccordionContent`} css={{"overflow": "hidden", "color": "var(--accent-11)", "paddingInlineStart": "var(--space-4)", "paddingInlineEnd": "var(--space-4)", "&:before, &:after": {"content": "' '", "display": "block", "height": "var(--space-3)"}, "&[data-state='open']": {"animation": `${slideDown} var(--animation-duration) var(--animation-easing)`}, "&[data-state='closed']": {"animation": `${slideUp} var(--animation-duration) var(--animation-easing)`}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)"}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Insecure temporary file: `}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`Creating a temporary file using this method may be insecure.`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Severity:`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`7.0`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`external/cwe/cwe-377`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Source: `}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/python/framework/test_util.py`} passHref={true}>
  {`tensorflow/python/framework/test_util.py:1918`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -24,6 +24,7 @@</span>\n<span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -868,6 +869,19 @@ def device(use_gpu):</span>\n<span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -934,6 +948,52 @@ def get_temp_dir(self):</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesButton css={{"background-color": "#0b082b", "color": "white", "border": "0", "border-radius": "30%"}}>
  {`✨`}
</RadixThemesButton>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_f9c5b32c9ee880700bd69b4db6354012 () {



  return (
    <RadixAccordionItem className={`AccordionItem`} css={{"overflow": "hidden", "width": "100%", "marginTop": "1px", "borderTop": "var(--divider-px) solid var(--gray-a6)", "&:first-child": {"marginTop": 0, "borderTop": 0, "borderTopLeftRadius": "var(--radius-4)", "borderTopRightRadius": "var(--radius-4)"}, "&:last-child": {"borderBottomLeftRadius": "var(--radius-4)", "borderBottomRightRadius": "var(--radius-4)"}, "&:focus-within": {"position": "relative", "zIndex": 1}, "&:first-child[data-variant='ghost'], *:where([data-variant='ghost']) &:first-child": {"borderRadius": 0, "borderTop": "var(--divider-px) solid var(--gray-a6)"}, "&:last-child[data-variant='ghost'], *:where([data-variant='ghost']) &:last-child": {"borderRadius": 0, "borderBottom": "var(--divider-px) solid var(--gray-a6)"}}} value={generateUUID()}>
  <RadixAccordionHeader className={`AccordionHeader`} css={{"display": "flex"}}>
  <RadixAccordionTrigger className={`AccordionTrigger`} css={{"color": "var(--accent-11)", "fontSize": "1.1em", "lineHeight": 1, "justifyContent": "space-between", "alignItems": "center", "flex": 1, "display": "flex", "padding": "var(--space-3) var(--space-4)", "width": "100%", "boxShadow": "0 var(--divider-px) 0 var(--gray-a6)", "&[data-state='open'] > .AccordionChevron": {"transform": "rotate(180deg)"}, "&:hover": {"backgroundColor": "var(--accent-4)"}, "& > .AccordionChevron": {"transition": "transform var(--animation-duration) var(--animation-easing)"}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)", "&:hover": {"backgroundColor": "var(--accent-10)"}, "& > .AccordionChevron": {"color": "var(--accent-contrast)"}}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`py/insecure-temporary-file`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`introduced in commit`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/f6860cd3056d1f965e13472e148f3b990ab9c9b4`} passHref={true}>
  {`f6860cd30`}
</NextLink>
</RadixThemesLink>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`by`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflower-gardener`} passHref={true}>
  {`tensorflower-gardener`}
</NextLink>
</RadixThemesLink>
</RadixThemesBox>
  <LucideChevronDownIcon className={`AccordionChevron`} css={{"color": "var(--current-color)"}}/>
</RadixAccordionTrigger>
</RadixAccordionHeader>
  <RadixAccordionContent className={`AccordionContent`} css={{"overflow": "hidden", "color": "var(--accent-11)", "paddingInlineStart": "var(--space-4)", "paddingInlineEnd": "var(--space-4)", "&:before, &:after": {"content": "' '", "display": "block", "height": "var(--space-3)"}, "&[data-state='open']": {"animation": `${slideDown} var(--animation-duration) var(--animation-easing)`}, "&[data-state='closed']": {"animation": `${slideUp} var(--animation-duration) var(--animation-easing)`}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)"}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Insecure temporary file: `}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`Creating a temporary file using this method may be insecure.`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Severity:`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`7.0`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`external/cwe/cwe-377`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Source: `}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/python/debug/examples/v1/debug_errors.py`} passHref={true}>
  {`tensorflow/python/debug/examples/v1/debug_errors.py:48`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -44,12 +44,11 @@ def main(_):</span>\n<span style='background-color: #ffffff;'>  44|<span style='color:red;'>44  </span>   z = tf.matmul(m, v, name='z')</span>\n<span style='background-color: #ffffff;'>  45|<span style='color:red;'>45  </span> </span>\n<span style='background-color: #ffffff;'>  46|<span style='color:red;'>46  </span>   if FLAGS.debug:</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>47  </span>-    config_file_path = (tempfile.mktemp('.tfdbg_config')</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>48  </span>-                        if FLAGS.use_random_config_path else None)</span>\n<span style='background-color: #ddffdd;'>  47|<span style='color:red;'>    </span>+    config_file_path = (</span>\n<span style='background-color: #ddffdd;'>  48|<span style='color:red;'>    </span>+        tempfile.mktemp('.tfdbg_config')</span>\n<span style='background-color: #ddffdd;'>  49|<span style='color:red;'>    </span>+        if FLAGS.use_random_config_path else None)</span>\n<span style='background-color: #ffffff;'>  50|<span style='color:red;'>49  </span>     sess = tf_debug.LocalCLIDebugWrapperSession(</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>50  </span>-        sess,</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>51  </span>-        ui_type=FLAGS.ui_type,</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>52  </span>-        config_file_path=config_file_path)</span>\n<span style='background-color: #ddffdd;'>  51|<span style='color:red;'>    </span>+        sess, ui_type=FLAGS.ui_type, config_file_path=config_file_path)</span>\n<span style='background-color: #ffffff;'>  52|<span style='color:red;'>53  </span> </span>\n<span style='background-color: #ffffff;'>  53|<span style='color:red;'>54  </span>   if FLAGS.error == 'shape_mismatch':</span>\n<span style='background-color: #ffffff;'>  54|<span style='color:red;'>55  </span>     print(sess.run(y, feed_dict={ph_float: np.array([[0.0], [1.0], [2.0]])}))</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesButton css={{"background-color": "#0b082b", "color": "white", "border": "0", "border-radius": "30%"}}>
  {`✨`}
</RadixThemesButton>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_fdaaaa60212ea55c1f48c336218a179c () {



  return (
    <RadixAccordionItem className={`AccordionItem`} css={{"overflow": "hidden", "width": "100%", "marginTop": "1px", "borderTop": "var(--divider-px) solid var(--gray-a6)", "&:first-child": {"marginTop": 0, "borderTop": 0, "borderTopLeftRadius": "var(--radius-4)", "borderTopRightRadius": "var(--radius-4)"}, "&:last-child": {"borderBottomLeftRadius": "var(--radius-4)", "borderBottomRightRadius": "var(--radius-4)"}, "&:focus-within": {"position": "relative", "zIndex": 1}, "&:first-child[data-variant='ghost'], *:where([data-variant='ghost']) &:first-child": {"borderRadius": 0, "borderTop": "var(--divider-px) solid var(--gray-a6)"}, "&:last-child[data-variant='ghost'], *:where([data-variant='ghost']) &:last-child": {"borderRadius": 0, "borderBottom": "var(--divider-px) solid var(--gray-a6)"}}} value={generateUUID()}>
  <RadixAccordionHeader className={`AccordionHeader`} css={{"display": "flex"}}>
  <RadixAccordionTrigger className={`AccordionTrigger`} css={{"color": "var(--accent-11)", "fontSize": "1.1em", "lineHeight": 1, "justifyContent": "space-between", "alignItems": "center", "flex": 1, "display": "flex", "padding": "var(--space-3) var(--space-4)", "width": "100%", "boxShadow": "0 var(--divider-px) 0 var(--gray-a6)", "&[data-state='open'] > .AccordionChevron": {"transform": "rotate(180deg)"}, "&:hover": {"backgroundColor": "var(--accent-4)"}, "& > .AccordionChevron": {"transition": "transform var(--animation-duration) var(--animation-easing)"}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)", "&:hover": {"backgroundColor": "var(--accent-10)"}, "& > .AccordionChevron": {"color": "var(--accent-contrast)"}}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`py/insecure-temporary-file`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`introduced in commit`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/f6860cd3056d1f965e13472e148f3b990ab9c9b4`} passHref={true}>
  {`f6860cd30`}
</NextLink>
</RadixThemesLink>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`by`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflower-gardener`} passHref={true}>
  {`tensorflower-gardener`}
</NextLink>
</RadixThemesLink>
</RadixThemesBox>
  <LucideChevronDownIcon className={`AccordionChevron`} css={{"color": "var(--current-color)"}}/>
</RadixAccordionTrigger>
</RadixAccordionHeader>
  <RadixAccordionContent className={`AccordionContent`} css={{"overflow": "hidden", "color": "var(--accent-11)", "paddingInlineStart": "var(--space-4)", "paddingInlineEnd": "var(--space-4)", "&:before, &:after": {"content": "' '", "display": "block", "height": "var(--space-3)"}, "&[data-state='open']": {"animation": `${slideDown} var(--animation-duration) var(--animation-easing)`}, "&[data-state='closed']": {"animation": `${slideUp} var(--animation-duration) var(--animation-easing)`}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)"}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Insecure temporary file: `}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`Creating a temporary file using this method may be insecure.`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Severity:`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`7.0`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`external/cwe/cwe-377`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Source: `}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/python/debug/examples/v1/debug_mnist_v1.py`} passHref={true}>
  {`tensorflow/python/debug/examples/v1/debug_mnist_v1.py:218`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -0,0 +1,236 @@</span>\n<span style='background-color: #ddffdd;'> 209|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'> 210|<span style='color:red;'>    </span>+  if FLAGS.debug and FLAGS.tensorboard_debug_address:</span>\n<span style='background-color: #ddffdd;'> 211|<span style='color:red;'>    </span>+    raise ValueError(</span>\n<span style='background-color: #ddffdd;'> 212|<span style='color:red;'>    </span>+        'The --debug and --tensorboard_debug_address flags are mutually '</span>\n<span style='background-color: #ddffdd;'> 213|<span style='color:red;'>    </span>+        'exclusive.')</span>\n<span style='background-color: #ddffdd;'> 214|<span style='color:red;'>    </span>+  if FLAGS.debug:</span>\n<span style='background-color: #ddffdd;'> 215|<span style='color:red;'>    </span>+    config_file_path = (</span>\n<span style='background-color: #ddffdd;'> 216|<span style='color:red;'>    </span>+        tempfile.mktemp('.tfdbg_config')</span>\n<span style='background-color: #ddffdd;'> 217|<span style='color:red;'>    </span>+        if FLAGS.use_random_config_path else None)</span>\n<span style='background-color: #ddffdd;'> 218|<span style='color:red;'>    </span>+    sess = tf_debug.LocalCLIDebugWrapperSession(</span>\n<span style='background-color: #ddffdd;'> 219|<span style='color:red;'>    </span>+        sess, ui_type=FLAGS.ui_type, config_file_path=config_file_path)</span>\n<span style='background-color: #ddffdd;'> 220|<span style='color:red;'>    </span>+  elif FLAGS.tensorboard_debug_address:</span>\n<span style='background-color: #ddffdd;'> 221|<span style='color:red;'>    </span>+    sess = tf_debug.TensorBoardDebugWrapperSession(</span>\n<span style='background-color: #ddffdd;'> 222|<span style='color:red;'>    </span>+        sess, FLAGS.tensorboard_debug_address)</span>\n<span style='background-color: #ddffdd;'> 223|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'> 224|<span style='color:red;'>    </span>+  # Add this point, sess is a debug wrapper around the actual Session if</span>\n<span style='background-color: #ddffdd;'> 225|<span style='color:red;'>    </span>+  # FLAGS.debug is true. In that case, calling run() will launch the CLI.</span>\n<span style='background-color: #ddffdd;'> 226|<span style='color:red;'>    </span>+  for i in range(FLAGS.max_steps):</span>\n<span style='background-color: #ddffdd;'> 227|<span style='color:red;'>    </span>+    acc = sess.run(accuracy, feed_dict={handle: train_handle})</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesButton css={{"background-color": "#0b082b", "color": "white", "border": "0", "border-radius": "30%"}}>
  {`✨`}
</RadixThemesButton>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_d3298a2600e4a3de36f738f2630625a3 () {



  return (
    <RadixAccordionItem className={`AccordionItem`} css={{"overflow": "hidden", "width": "100%", "marginTop": "1px", "borderTop": "var(--divider-px) solid var(--gray-a6)", "&:first-child": {"marginTop": 0, "borderTop": 0, "borderTopLeftRadius": "var(--radius-4)", "borderTopRightRadius": "var(--radius-4)"}, "&:last-child": {"borderBottomLeftRadius": "var(--radius-4)", "borderBottomRightRadius": "var(--radius-4)"}, "&:focus-within": {"position": "relative", "zIndex": 1}, "&:first-child[data-variant='ghost'], *:where([data-variant='ghost']) &:first-child": {"borderRadius": 0, "borderTop": "var(--divider-px) solid var(--gray-a6)"}, "&:last-child[data-variant='ghost'], *:where([data-variant='ghost']) &:last-child": {"borderRadius": 0, "borderBottom": "var(--divider-px) solid var(--gray-a6)"}}} value={generateUUID()}>
  <RadixAccordionHeader className={`AccordionHeader`} css={{"display": "flex"}}>
  <RadixAccordionTrigger className={`AccordionTrigger`} css={{"color": "var(--accent-11)", "fontSize": "1.1em", "lineHeight": 1, "justifyContent": "space-between", "alignItems": "center", "flex": 1, "display": "flex", "padding": "var(--space-3) var(--space-4)", "width": "100%", "boxShadow": "0 var(--divider-px) 0 var(--gray-a6)", "&[data-state='open'] > .AccordionChevron": {"transform": "rotate(180deg)"}, "&:hover": {"backgroundColor": "var(--accent-4)"}, "& > .AccordionChevron": {"transition": "transform var(--animation-duration) var(--animation-easing)"}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)", "&:hover": {"backgroundColor": "var(--accent-10)"}, "& > .AccordionChevron": {"color": "var(--accent-contrast)"}}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`py/insecure-temporary-file`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`introduced in commit`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/427c6db0f2486b91c37cf87f1e663ecd6e5b1a72`} passHref={true}>
  {`427c6db0f`}
</NextLink>
</RadixThemesLink>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`by`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tanzhenyu`} passHref={true}>
  {`tanzhenyu`}
</NextLink>
</RadixThemesLink>
</RadixThemesBox>
  <LucideChevronDownIcon className={`AccordionChevron`} css={{"color": "var(--current-color)"}}/>
</RadixAccordionTrigger>
</RadixAccordionHeader>
  <RadixAccordionContent className={`AccordionContent`} css={{"overflow": "hidden", "color": "var(--accent-11)", "paddingInlineStart": "var(--space-4)", "paddingInlineEnd": "var(--space-4)", "&:before, &:after": {"content": "' '", "display": "block", "height": "var(--space-3)"}, "&[data-state='open']": {"animation": `${slideDown} var(--animation-duration) var(--animation-easing)`}, "&[data-state='closed']": {"animation": `${slideUp} var(--animation-duration) var(--animation-easing)`}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)"}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Insecure temporary file: `}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`Creating a temporary file using this method may be insecure.`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Severity:`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`7.0`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`external/cwe/cwe-377`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Source: `}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/contrib/distribute/python/keras_utils_test.py`} passHref={true}>
  {`tensorflow/contrib/distribute/python/keras_utils_test.py:532`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -0,0 +1,471 @@</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesButton css={{"background-color": "#0b082b", "color": "white", "border": "0", "border-radius": "30%"}}>
  {`✨`}
</RadixThemesButton>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Item_2261ddb9a9d71384107c9f9da3da7275 () {



  return (
    <RadixAccordionItem className={`AccordionItem`} css={{"overflow": "hidden", "width": "100%", "marginTop": "1px", "borderTop": "var(--divider-px) solid var(--gray-a6)", "&:first-child": {"marginTop": 0, "borderTop": 0, "borderTopLeftRadius": "var(--radius-4)", "borderTopRightRadius": "var(--radius-4)"}, "&:last-child": {"borderBottomLeftRadius": "var(--radius-4)", "borderBottomRightRadius": "var(--radius-4)"}, "&:focus-within": {"position": "relative", "zIndex": 1}, "&:first-child[data-variant='ghost'], *:where([data-variant='ghost']) &:first-child": {"borderRadius": 0, "borderTop": "var(--divider-px) solid var(--gray-a6)"}, "&:last-child[data-variant='ghost'], *:where([data-variant='ghost']) &:last-child": {"borderRadius": 0, "borderBottom": "var(--divider-px) solid var(--gray-a6)"}}} value={generateUUID()}>
  <RadixAccordionHeader className={`AccordionHeader`} css={{"display": "flex"}}>
  <RadixAccordionTrigger className={`AccordionTrigger`} css={{"color": "var(--accent-11)", "fontSize": "1.1em", "lineHeight": 1, "justifyContent": "space-between", "alignItems": "center", "flex": 1, "display": "flex", "padding": "var(--space-3) var(--space-4)", "width": "100%", "boxShadow": "0 var(--divider-px) 0 var(--gray-a6)", "&[data-state='open'] > .AccordionChevron": {"transform": "rotate(180deg)"}, "&:hover": {"backgroundColor": "var(--accent-4)"}, "& > .AccordionChevron": {"transition": "transform var(--animation-duration) var(--animation-easing)"}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)", "&:hover": {"backgroundColor": "var(--accent-10)"}, "& > .AccordionChevron": {"color": "var(--accent-contrast)"}}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`py/insecure-temporary-file`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`introduced in commit`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/0b15439f8f0f2d4755587f4096c3ea04cb199d23`} passHref={true}>
  {`0b15439f8`}
</NextLink>
</RadixThemesLink>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`by`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/aselle`} passHref={true}>
  {`aselle`}
</NextLink>
</RadixThemesLink>
</RadixThemesBox>
  <LucideChevronDownIcon className={`AccordionChevron`} css={{"color": "var(--current-color)"}}/>
</RadixAccordionTrigger>
</RadixAccordionHeader>
  <RadixAccordionContent className={`AccordionContent`} css={{"overflow": "hidden", "color": "var(--accent-11)", "paddingInlineStart": "var(--space-4)", "paddingInlineEnd": "var(--space-4)", "&:before, &:after": {"content": "' '", "display": "block", "height": "var(--space-3)"}, "&[data-state='open']": {"animation": `${slideDown} var(--animation-duration) var(--animation-easing)`}, "&[data-state='closed']": {"animation": `${slideUp} var(--animation-duration) var(--animation-easing)`}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)"}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Insecure temporary file: `}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`Creating a temporary file using this method may be insecure.`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Severity:`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`7.0`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`external/cwe/cwe-377`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Source: `}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/contrib/lite/schema/upgrade_schema_test.py`} passHref={true}>
  {`tensorflow/contrib/lite/schema/upgrade_schema_test.py:257`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    \n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesButton css={{"background-color": "#0b082b", "color": "white", "border": "0", "border-radius": "30%"}}>
  {`✨`}
</RadixThemesButton>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Toaster_89416713a273995fc60191a4cf573054 () {
  const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)


  refs['__toast'] = toast
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  
const toast_props = {"description": `Check if server is reachable at ${getBackendURL(env.EVENT).href}`, "closeButton": true, "duration": 120000, "id": "websocket-error"};
const [userDismissed, setUserDismissed] = useState(false);
useEffect(() => {
    if (connectErrors.length >= 2) {
        if (!userDismissed) {
            toast.error(
                `Cannot connect to server: ${(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}.`,
                {...toast_props, onDismiss: () => setUserDismissed(true)},
            )
        }
    } else {
        toast.dismiss("websocket-error");
        setUserDismissed(false);  // after reconnection reset dismissed state
    }
}, [connectErrors]);

  return (
    <Toaster closeButton={false} expand={true} position={`bottom-right`} richColors={true} theme={colorMode}/>
  )
}

export function Item_be03174531b5587794e3cef7786ccb1f () {



  return (
    <RadixAccordionItem className={`AccordionItem`} css={{"overflow": "hidden", "width": "100%", "marginTop": "1px", "borderTop": "var(--divider-px) solid var(--gray-a6)", "&:first-child": {"marginTop": 0, "borderTop": 0, "borderTopLeftRadius": "var(--radius-4)", "borderTopRightRadius": "var(--radius-4)"}, "&:last-child": {"borderBottomLeftRadius": "var(--radius-4)", "borderBottomRightRadius": "var(--radius-4)"}, "&:focus-within": {"position": "relative", "zIndex": 1}, "&:first-child[data-variant='ghost'], *:where([data-variant='ghost']) &:first-child": {"borderRadius": 0, "borderTop": "var(--divider-px) solid var(--gray-a6)"}, "&:last-child[data-variant='ghost'], *:where([data-variant='ghost']) &:last-child": {"borderRadius": 0, "borderBottom": "var(--divider-px) solid var(--gray-a6)"}}} value={generateUUID()}>
  <RadixAccordionHeader className={`AccordionHeader`} css={{"display": "flex"}}>
  <RadixAccordionTrigger className={`AccordionTrigger`} css={{"color": "var(--accent-11)", "fontSize": "1.1em", "lineHeight": 1, "justifyContent": "space-between", "alignItems": "center", "flex": 1, "display": "flex", "padding": "var(--space-3) var(--space-4)", "width": "100%", "boxShadow": "0 var(--divider-px) 0 var(--gray-a6)", "&[data-state='open'] > .AccordionChevron": {"transform": "rotate(180deg)"}, "&:hover": {"backgroundColor": "var(--accent-4)"}, "& > .AccordionChevron": {"transition": "transform var(--animation-duration) var(--animation-easing)"}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)", "&:hover": {"backgroundColor": "var(--accent-10)"}, "& > .AccordionChevron": {"color": "var(--accent-contrast)"}}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`py/insecure-temporary-file`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`introduced in commit`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/dc1aab20a12e2d32a10f019a5de3f65f56345fa8`} passHref={true}>
  {`dc1aab20a`}
</NextLink>
</RadixThemesLink>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`by`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflower-gardener`} passHref={true}>
  {`tensorflower-gardener`}
</NextLink>
</RadixThemesLink>
</RadixThemesBox>
  <LucideChevronDownIcon className={`AccordionChevron`} css={{"color": "var(--current-color)"}}/>
</RadixAccordionTrigger>
</RadixAccordionHeader>
  <RadixAccordionContent className={`AccordionContent`} css={{"overflow": "hidden", "color": "var(--accent-11)", "paddingInlineStart": "var(--space-4)", "paddingInlineEnd": "var(--space-4)", "&:before, &:after": {"content": "' '", "display": "block", "height": "var(--space-3)"}, "&[data-state='open']": {"animation": `${slideDown} var(--animation-duration) var(--animation-easing)`}, "&[data-state='closed']": {"animation": `${slideUp} var(--animation-duration) var(--animation-easing)`}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)"}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Insecure temporary file: `}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`Creating a temporary file using this method may be insecure.`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Severity:`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`7.0`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`external/cwe/cwe-377`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Source: `}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/python/kernel_tests/logging_ops_test.py`} passHref={true}>
  {`tensorflow/python/kernel_tests/logging_ops_test.py:311`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -18,7 +18,9 @@</span>\n<span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -35,7 +37,6 @@</span>\n<span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -271,6 +272,30 @@ def testPrintOneTensorStdout(self):</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesButton css={{"background-color": "#0b082b", "color": "white", "border": "0", "border-radius": "30%"}}>
  {`✨`}
</RadixThemesButton>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment>
  <Div_ac2a89ea84667d600a059f034bd91dfe/>
  <Toaster_89416713a273995fc60191a4cf573054/>
</Fragment>
  <RadixThemesContainer css={{"padding": "16px"}} size={`3`}>
  <Fragment>
  <RadixThemesBox css={{"display": "flex", "flex-direction": "column", "align-items": "flex-start", "justify-content": "space-between", "margin-bottom": "0", "padding": "10px", "border": "1px solid #ddd", "border-radius": "6px", "position": "relative", "background-color": "#ffeeaa", "&:hover": {"background-color": "#eee", "box-shadow": "0 0 10px rgba(0, 0, 0, 0.1)"}}}>
  <RadixThemesText as={`p`} css={{"width": "80%"}}>
  {`Initial version of SavedModel V1 Importer that converts a V1 SavedModel to a
MLIR Module that contains functions specified by signature defs.`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#6c757d", "color": "#fff", "font-size": "14px", "position": "absolute", "right": "1em", "z-index": "1"}}>
  {`d25dd8074`}
</RadixThemesText>
  <RadixThemesBox css={{"display": "flex", "flex-wrap": "wrap", "align-items": "center"}}>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#28a745", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`tensorflower-gardener`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#17a2b8", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`2020-01-03`}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesBox>
</Fragment>
  <RadixAccordionRoot css={{"borderRadius": "var(--radius-4)", "boxShadow": "0 2px 10px var(--black-a1)", "&[data-variant='classic']": {"backgroundColor": "var(--accent-9)", "boxShadow": "0 2px 10px var(--black-a4)"}, "&[data-variant='soft']": {"backgroundColor": "var(--accent-3)"}, "&[data-variant='outline']": {"border": "1px solid var(--accent-6)", "--divider-px": "1px"}, "&[data-variant='surface']": {"border": "1px solid var(--accent-6)", "backgroundColor": "var(--accent-surface)", "--divider-px": "1px"}, "&[data-variant='ghost']": {"backgroundColor": "none", "boxShadow": "None"}, "--animation-duration": "250ms", "--animation-easing": "cubic-bezier(0.87, 0, 0.13, 1)", "width": "100%"}} data-variant={`outline`} type={`multiple`}>
  <RadixAccordionItem className={`AccordionItem`} css={{"overflow": "hidden", "width": "100%", "marginTop": "1px", "borderTop": "var(--divider-px) solid var(--gray-a6)", "&:first-child": {"marginTop": 0, "borderTop": 0, "borderTopLeftRadius": "var(--radius-4)", "borderTopRightRadius": "var(--radius-4)"}, "&:last-child": {"borderBottomLeftRadius": "var(--radius-4)", "borderBottomRightRadius": "var(--radius-4)"}, "&:focus-within": {"position": "relative", "zIndex": 1}, "&:first-child[data-variant='ghost'], *:where([data-variant='ghost']) &:first-child": {"borderRadius": 0, "borderTop": "var(--divider-px) solid var(--gray-a6)"}, "&:last-child[data-variant='ghost'], *:where([data-variant='ghost']) &:last-child": {"borderRadius": 0, "borderBottom": "var(--divider-px) solid var(--gray-a6)"}}} value={`rrrrr`}>
  <RadixAccordionHeader className={`AccordionHeader`} css={{"display": "flex"}}>
  <RadixAccordionTrigger className={`AccordionTrigger`} css={{"color": "var(--accent-11)", "fontSize": "1.1em", "lineHeight": 1, "justifyContent": "space-between", "alignItems": "center", "flex": 1, "display": "flex", "padding": "var(--space-3) var(--space-4)", "width": "100%", "boxShadow": "0 var(--divider-px) 0 var(--gray-a6)", "&[data-state='open'] > .AccordionChevron": {"transform": "rotate(180deg)"}, "&:hover": {"backgroundColor": "var(--accent-4)"}, "& > .AccordionChevron": {"transition": "transform var(--animation-duration) var(--animation-easing)"}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)", "&:hover": {"backgroundColor": "var(--accent-10)"}, "& > .AccordionChevron": {"color": "var(--accent-contrast)"}}}}>
  {`Issues introduced in this commit`}
  <LucideChevronDownIcon className={`AccordionChevron`} css={{"color": "var(--current-color)"}}/>
</RadixAccordionTrigger>
</RadixAccordionHeader>
  <RadixAccordionContent className={`AccordionContent`} css={{"overflow": "hidden", "color": "var(--accent-11)", "paddingInlineStart": "var(--space-4)", "paddingInlineEnd": "var(--space-4)", "&:before, &:after": {"content": "' '", "display": "block", "height": "var(--space-3)"}, "&[data-state='open']": {"animation": `${slideDown} var(--animation-duration) var(--animation-easing)`}, "&[data-state='closed']": {"animation": `${slideUp} var(--animation-duration) var(--animation-easing)`}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)"}}}>
  <RadixAccordionRoot collapsible={true} css={{"borderRadius": "var(--radius-4)", "boxShadow": "0 2px 10px var(--black-a1)", "&[data-variant='classic']": {"backgroundColor": "var(--accent-9)", "boxShadow": "0 2px 10px var(--black-a4)"}, "&[data-variant='soft']": {"backgroundColor": "var(--accent-3)"}, "&[data-variant='outline']": {"border": "1px solid var(--accent-6)", "--divider-px": "1px"}, "&[data-variant='surface']": {"border": "1px solid var(--accent-6)", "backgroundColor": "var(--accent-surface)", "--divider-px": "1px"}, "&[data-variant='ghost']": {"backgroundColor": "none", "boxShadow": "None"}, "--animation-duration": "250ms", "--animation-easing": "cubic-bezier(0.87, 0, 0.13, 1)", "width": "100%"}} data-accent-color={`yellow`} data-variant={`outline`} type={`multiple`}>
  <Item_d60f42ac3ae60a135910dbb38f572d32/>
</RadixAccordionRoot>
</RadixAccordionContent>
</RadixAccordionItem>
</RadixAccordionRoot>
  <RadixAccordionRoot css={{"borderRadius": "var(--radius-4)", "boxShadow": "0 2px 10px var(--black-a1)", "&[data-variant='classic']": {"backgroundColor": "var(--accent-9)", "boxShadow": "0 2px 10px var(--black-a4)"}, "&[data-variant='soft']": {"backgroundColor": "var(--accent-3)"}, "&[data-variant='outline']": {"border": "1px solid var(--accent-6)", "--divider-px": "1px"}, "&[data-variant='surface']": {"border": "1px solid var(--accent-6)", "backgroundColor": "var(--accent-surface)", "--divider-px": "1px"}, "&[data-variant='ghost']": {"backgroundColor": "none", "boxShadow": "None"}, "--animation-duration": "250ms", "--animation-easing": "cubic-bezier(0.87, 0, 0.13, 1)", "width": "100%"}} data-variant={`outline`} type={`multiple`}>
  <RadixAccordionItem className={`AccordionItem`} css={{"overflow": "hidden", "width": "100%", "marginTop": "1px", "borderTop": "var(--divider-px) solid var(--gray-a6)", "&:first-child": {"marginTop": 0, "borderTop": 0, "borderTopLeftRadius": "var(--radius-4)", "borderTopRightRadius": "var(--radius-4)"}, "&:last-child": {"borderBottomLeftRadius": "var(--radius-4)", "borderBottomRightRadius": "var(--radius-4)"}, "&:focus-within": {"position": "relative", "zIndex": 1}, "&:first-child[data-variant='ghost'], *:where([data-variant='ghost']) &:first-child": {"borderRadius": 0, "borderTop": "var(--divider-px) solid var(--gray-a6)"}, "&:last-child[data-variant='ghost'], *:where([data-variant='ghost']) &:last-child": {"borderRadius": 0, "borderBottom": "var(--divider-px) solid var(--gray-a6)"}}} value={`rrrrr2`}>
  <RadixAccordionHeader className={`AccordionHeader`} css={{"display": "flex"}}>
  <RadixAccordionTrigger className={`AccordionTrigger`} css={{"color": "var(--accent-11)", "fontSize": "1.1em", "lineHeight": 1, "justifyContent": "space-between", "alignItems": "center", "flex": 1, "display": "flex", "padding": "var(--space-3) var(--space-4)", "width": "100%", "boxShadow": "0 var(--divider-px) 0 var(--gray-a6)", "&[data-state='open'] > .AccordionChevron": {"transform": "rotate(180deg)"}, "&:hover": {"backgroundColor": "var(--accent-4)"}, "& > .AccordionChevron": {"transition": "transform var(--animation-duration) var(--animation-easing)"}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)", "&:hover": {"backgroundColor": "var(--accent-10)"}, "& > .AccordionChevron": {"color": "var(--accent-contrast)"}}}}>
  {`Issues introduced in previous commits`}
  <LucideChevronDownIcon className={`AccordionChevron`} css={{"color": "var(--current-color)"}}/>
</RadixAccordionTrigger>
</RadixAccordionHeader>
  <RadixAccordionContent className={`AccordionContent`} css={{"overflow": "hidden", "color": "var(--accent-11)", "paddingInlineStart": "var(--space-4)", "paddingInlineEnd": "var(--space-4)", "&:before, &:after": {"content": "' '", "display": "block", "height": "var(--space-3)"}, "&[data-state='open']": {"animation": `${slideDown} var(--animation-duration) var(--animation-easing)`}, "&[data-state='closed']": {"animation": `${slideUp} var(--animation-duration) var(--animation-easing)`}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)"}}}>
  <RadixAccordionRoot collapsible={true} css={{"borderRadius": "var(--radius-4)", "boxShadow": "0 2px 10px var(--black-a1)", "&[data-variant='classic']": {"backgroundColor": "var(--accent-9)", "boxShadow": "0 2px 10px var(--black-a4)"}, "&[data-variant='soft']": {"backgroundColor": "var(--accent-3)"}, "&[data-variant='outline']": {"border": "1px solid var(--accent-6)", "--divider-px": "1px"}, "&[data-variant='surface']": {"border": "1px solid var(--accent-6)", "backgroundColor": "var(--accent-surface)", "--divider-px": "1px"}, "&[data-variant='ghost']": {"backgroundColor": "none", "boxShadow": "None"}, "--animation-duration": "250ms", "--animation-easing": "cubic-bezier(0.87, 0, 0.13, 1)", "width": "100%"}} data-accent-color={`red`} data-variant={`outline`} type={`multiple`}>
  <Item_66a5f1afad9d270a22c309f31678c22f/>
  <Item_f9c5b32c9ee880700bd69b4db6354012/>
  <Item_e5cb0d97d70d9f4e9e48a20526865b94/>
  <Item_fdaaaa60212ea55c1f48c336218a179c/>
  <Item_400ce3b43c0f8026d383f203e1cf05ae/>
  <Item_d3298a2600e4a3de36f738f2630625a3/>
  <Item_bf67151c0294b5daca675977a2350521/>
  <Item_8b6b9affd183708d6e1035ec0a98068b/>
  <Item_fb620ecaa90759a7738325d04c4630ca/>
  <Item_5da41868e3ec341271804d9cbaa2c138/>
  <Item_be03174531b5587794e3cef7786ccb1f/>
  <Item_0d638539f1a7d00161f591b1599824e9/>
  <Item_782bffc3187b7e67b6db9a94a1cc532c/>
  <Item_2261ddb9a9d71384107c9f9da3da7275/>
  <Item_66d327a2d184bc9c910f7437591d0dba/>
  <Item_5be9e2d11e1fbb60ad160ecc050ad0af/>
  <Item_554ae6257e668de854e73a3137b89b54/>
</RadixAccordionRoot>
</RadixAccordionContent>
</RadixAccordionItem>
</RadixAccordionRoot>
</RadixThemesContainer>
  <NextHead>
  <title>
  {`App | D25Dd807485C`}
</title>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
