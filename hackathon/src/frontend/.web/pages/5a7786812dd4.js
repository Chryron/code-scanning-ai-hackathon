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



export function Item_8064aefc992f5d3b95b0366f290cbd96 () {



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
  {`d25dd8074`}
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
  {`tensorflow/compiler/mlir/tensorflow/tests/tf_saved_model/common_v1.py:91`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -0,0 +1,93 @@</span>\n<span style='background-color: #ddffdd;'>  82|<span style='color:red;'>    </span>+    logging.info('Saved model to: %s', save_model_path)</span>\n<span style='background-color: #ddffdd;'>  83|<span style='color:red;'>    </span>+    mlir = pywrap_tensorflow.experimental_convert_saved_model_v1_to_mlir(</span>\n<span style='background-color: #ddffdd;'>  84|<span style='color:red;'>    </span>+        save_model_path, ','.join([tf.saved_model.tag_constants.SERVING]),</span>\n<span style='background-color: #ddffdd;'>  85|<span style='color:red;'>    </span>+        show_debug_info)</span>\n<span style='background-color: #ddffdd;'>  86|<span style='color:red;'>    </span>+    # We don't strictly need this, but it serves as a handy sanity check</span>\n<span style='background-color: #ddffdd;'>  87|<span style='color:red;'>    </span>+    # for that API, which is otherwise a bit annoying to test.</span>\n<span style='background-color: #ddffdd;'>  88|<span style='color:red;'>    </span>+    # The canonicalization shouldn't affect these tests in any way.</span>\n<span style='background-color: #ddffdd;'>  89|<span style='color:red;'>    </span>+    mlir = pywrap_tensorflow.experimental_run_pass_pipeline(</span>\n<span style='background-color: #ddffdd;'>  90|<span style='color:red;'>    </span>+        mlir, 'tf-standard-pipeline', show_debug_info)</span>\n<span style='background-color: #ddffdd;'>  91|<span style='color:red;'>    </span>+    print(mlir)</span>\n<span style='background-color: #ddffdd;'>  92|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'>  93|<span style='color:red;'>    </span>+  app.run(app_main)</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
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

export function Item_bba2127b6fc0f937ea8b684ffc47088f () {



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
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/5a7786812dd4cb4511e8ef85b12017cf3d2ae08d`} passHref={true}>
  {`5a7786812dd4`}
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
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/tools/pip_package/v2/utils/utils.py`} passHref={true}>
  {`tensorflow/tools/pip_package/v2/utils/utils.py:78`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -0,0 +1,78 @@</span>\n<span style='background-color: #ddffdd;'>  69|<span style='color:red;'>    </span>+    dest = src_file[src_file.index('bin') + 4:]</span>\n<span style='background-color: #ddffdd;'>  70|<span style='color:red;'>    </span>+  else:</span>\n<span style='background-color: #ddffdd;'>  71|<span style='color:red;'>    </span>+    dest = src_file</span>\n<span style='background-color: #ddffdd;'>  72|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'>  73|<span style='color:red;'>    </span>+  if strip:</span>\n<span style='background-color: #ddffdd;'>  74|<span style='color:red;'>    </span>+    dest = dest.removeprefix(strip)</span>\n<span style='background-color: #ddffdd;'>  75|<span style='color:red;'>    </span>+  dest_dir_path = os.path.join(dst_dir, os.path.dirname(dest))</span>\n<span style='background-color: #ddffdd;'>  76|<span style='color:red;'>    </span>+  os.makedirs(dest_dir_path, exist_ok=True)</span>\n<span style='background-color: #ddffdd;'>  77|<span style='color:red;'>    </span>+  shutil.copy(src_file, dest_dir_path)</span>\n<span style='background-color: #ddffdd;'>  78|<span style='color:red;'>    </span>+  os.chmod(os.path.join(dst_dir, dest), 0o644)</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
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


export function Div_ac2a89ea84667d600a059f034bd91dfe () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <div css={{"position": "fixed", "width": "100vw", "height": "0"}} title={`Connection Error: ${(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}`}>
  <Fragment_cf53a535ae2e610a113dd361eb6ac95b/>
</div>
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


export function Item_b194d4c0b4f6219ee531d10d707cfe00 () {



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
  {`tensorflow/examples/speech_commands/input_data.py:240`}
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
  {`Add a new way to build tensorflow wheel.`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#6c757d", "color": "#fff", "font-size": "14px", "position": "absolute", "right": "1em", "z-index": "1"}}>
  {`5a7786812`}
</RadixThemesText>
  <RadixThemesBox css={{"display": "flex", "flex-wrap": "wrap", "align-items": "center"}}>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#28a745", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`tensorflower-gardener`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#17a2b8", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`2024-01-11`}
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
  <Item_bba2127b6fc0f937ea8b684ffc47088f/>
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
  <Item_8064aefc992f5d3b95b0366f290cbd96/>
  <Item_b194d4c0b4f6219ee531d10d707cfe00/>
</RadixAccordionRoot>
</RadixAccordionContent>
</RadixAccordionItem>
</RadixAccordionRoot>
</RadixThemesContainer>
  <NextHead>
  <title>
  {`App | 5A7786812Dd4`}
</title>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
