/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext, useEffect, useState } from "react"
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



export function Item_6a15716ac51a2340db8a2dda8b066ec9 () {



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
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/8b431f0f2e9d23b39e87b7b530e6270ba0c40e29`} passHref={true}>
  {`8b431f0f2`}
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
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/python/debug/debug_data_test.py`} passHref={true}>
  {`tensorflow/python/debug/debug_data_test.py:193`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -0,0 +1,142 @@</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <Button_e39075772496f12c9227ab1624195ba5/>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_6d1cd0f7ba795881a390fbb14a50aefe () {



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
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/91f0b6c6a4d0f4f9259aac162b1fae5d4b24a0d1`} passHref={true}>
  {`91f0b6c6a`}
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
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/contrib/learn/python/learn/datasets/text_datasets.py`} passHref={true}>
  {`tensorflow/contrib/learn/python/learn/datasets/text_datasets.py:41`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -1,17 +1,20 @@</span>\n<span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -22,25 +25,25 @@</span>\n<span style='background-color: #ffffff;'>  32|<span style='color:red;'>29  </span> </span>\n<span style='background-color: #ffffff;'>  33|<span style='color:red;'>30  </span> </span>\n<span style='background-color: #ffffff;'>  34|<span style='color:red;'>31  </span> def get_dbpedia(data_dir):</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>32  </span>-    train_path = os.path.join(data_dir, 'dbpedia_csv/train.csv')</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>33  </span>-    test_path = os.path.join(data_dir, 'dbpedia_csv/test.csv')</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>34  </span>-    if not (gfile.Exists(train_path) and gfile.Exists(test_path)):</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>35  </span>-        archive_path = base.maybe_download('dbpedia_csv.tar.gz', data_dir, DBPEDIA_URL)</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>36  </span>-        tfile = tarfile.open(archive_path, 'r:*')</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>37  </span>-        tfile.extractall(data_dir)</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>38  </span>-    train = base.load_csv(train_path, np.int32, 0, has_header=False)</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>39  </span>-    test = base.load_csv(test_path, np.int32, 0, has_header=False)</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>40  </span>-    datasets = base.Datasets(train=train, validation=None, test=test)</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>41  </span>-    return datasets</span>\n<span style='background-color: #ddffdd;'>  35|<span style='color:red;'>    </span>+  '''Get DBPedia datasets from CSV files.'''</span>\n<span style='background-color: #ddffdd;'>  36|<span style='color:red;'>    </span>+  train_path = os.path.join(data_dir, 'dbpedia_csv/train.csv')</span>\n<span style='background-color: #ddffdd;'>  37|<span style='color:red;'>    </span>+  test_path = os.path.join(data_dir, 'dbpedia_csv/test.csv')</span>\n<span style='background-color: #ddffdd;'>  38|<span style='color:red;'>    </span>+  if not (gfile.Exists(train_path) and gfile.Exists(test_path)):</span>\n<span style='background-color: #ddffdd;'>  39|<span style='color:red;'>    </span>+    archive_path = base.maybe_download(</span>\n<span style='background-color: #ddffdd;'>  40|<span style='color:red;'>    </span>+        'dbpedia_csv.tar.gz', data_dir, DBPEDIA_URL)</span>\n<span style='background-color: #ddffdd;'>  41|<span style='color:red;'>    </span>+    tfile = tarfile.open(archive_path, 'r:*')</span>\n<span style='background-color: #ddffdd;'>  42|<span style='color:red;'>    </span>+    tfile.extractall(data_dir)</span>\n<span style='background-color: #ddffdd;'>  43|<span style='color:red;'>    </span>+  train = base.load_csv(train_path, np.int32, 0, has_header=False)</span>\n<span style='background-color: #ddffdd;'>  44|<span style='color:red;'>    </span>+  test = base.load_csv(test_path, np.int32, 0, has_header=False)</span>\n<span style='background-color: #ddffdd;'>  45|<span style='color:red;'>    </span>+  return base.Datasets(train=train, validation=None, test=test)</span>\n<span style='background-color: #ffffff;'>  46|<span style='color:red;'>42  </span> </span>\n<span style='background-color: #ffffff;'>  47|<span style='color:red;'>43  </span> </span>\n<span style='background-color: #ffffff;'>  48|<span style='color:red;'>44  </span> def load_dbpedia():</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>45  </span>-    return get_dbpedia('dbpedia_data')</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>46  </span>-</span>\n<span style='background-color: #ddffdd;'>  49|<span style='color:red;'>    </span>+  return get_dbpedia('dbpedia_data')</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <Button_e39075772496f12c9227ab1624195ba5/>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_6a735695ec7230a72756199ddfb6fa2c () {



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
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/b8b8ebcf851df71ebb5209ae27d75e2befc50f0d`} passHref={true}>
  {`b8b8ebcf851d`}
</NextLink>
</RadixThemesLink>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`by`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/fchollet`} passHref={true}>
  {`fchollet`}
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
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/contrib/keras/python/keras/utils/data_utils.py`} passHref={true}>
  {`tensorflow/contrib/keras/python/keras/utils/data_utils.py:112`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -23,7 +23,9 @@</span>\n<span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -73,24 +75,108 @@ def chunk_read(response, chunk_size=8192, reporthook=None):</span>\n<span style='background-color: #ddffdd;'> 103|<span style='color:red;'>    </span>+      open_fn = tarfile.open</span>\n<span style='background-color: #ddffdd;'> 104|<span style='color:red;'>    </span>+      is_match_fn = tarfile.is_tarfile</span>\n<span style='background-color: #ddffdd;'> 105|<span style='color:red;'>    </span>+    if archive_type is 'zip':</span>\n<span style='background-color: #ddffdd;'> 106|<span style='color:red;'>    </span>+      open_fn = zipfile.ZipFile</span>\n<span style='background-color: #ddffdd;'> 107|<span style='color:red;'>    </span>+      is_match_fn = zipfile.is_zipfile</span>\n<span style='background-color: #ddffdd;'> 108|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'> 109|<span style='color:red;'>    </span>+    if is_match_fn(file_path):</span>\n<span style='background-color: #ddffdd;'> 110|<span style='color:red;'>    </span>+      with open_fn(file_path) as archive:</span>\n<span style='background-color: #ddffdd;'> 111|<span style='color:red;'>    </span>+        try:</span>\n<span style='background-color: #ddffdd;'> 112|<span style='color:red;'>    </span>+          archive.extractall(path)</span>\n<span style='background-color: #ddffdd;'> 113|<span style='color:red;'>    </span>+        except (tarfile.TarError, RuntimeError, KeyboardInterrupt):</span>\n<span style='background-color: #ddffdd;'> 114|<span style='color:red;'>    </span>+          if os.path.exists(path):</span>\n<span style='background-color: #ddffdd;'> 115|<span style='color:red;'>    </span>+            if os.path.isfile(path):</span>\n<span style='background-color: #ddffdd;'> 116|<span style='color:red;'>    </span>+              os.remove(path)</span>\n<span style='background-color: #ddffdd;'> 117|<span style='color:red;'>    </span>+            else:</span>\n<span style='background-color: #ddffdd;'> 118|<span style='color:red;'>    </span>+              shutil.rmtree(path)</span>\n<span style='background-color: #ddffdd;'> 119|<span style='color:red;'>    </span>+          raise</span>\n<span style='background-color: #ddffdd;'> 120|<span style='color:red;'>    </span>+      return True</span>\n<span style='background-color: #ddffdd;'> 121|<span style='color:red;'>    </span>+  return False</span>\n<span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -106,10 +192,12 @@ def get_file(fname, origin, untar=False, md5_hash=None,</span>\n<span style='background-color: #ffffff;'> 192|<span style='color:red;'>106 </span>   download = False</span>\n<span style='background-color: #ffffff;'> 193|<span style='color:red;'>107 </span>   if os.path.exists(fpath):</span>\n<span style='background-color: #ffffff;'> 194|<span style='color:red;'>108 </span>     # File found; verify integrity if a hash was provided.</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>109 </span>-    if md5_hash is not None:</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>110 </span>-      if not validate_file(fpath, md5_hash):</span>\n<span style='background-color: #ffffff;'> 197|<span style='color:red;'>111 </span>         print('A local file was found, but it seems to be '</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>112 </span>-              'incomplete or outdated.')</span>\n<span style='background-color: #ffffff;'> 201|<span style='color:red;'>113 </span>         download = True</span>\n<span style='background-color: #ffffff;'> 202|<span style='color:red;'>114 </span>   else:</span>\n<span style='background-color: #ffffff;'> 203|<span style='color:red;'>115 </span>     download = True</span>\n<span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -141,38 +229,68 @@ def dl_progress(count, block_size, total_size, progbar=None):</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <Button_e39075772496f12c9227ab1624195ba5/>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Button_e39075772496f12c9227ab1624195ba5 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_ed90e0bbc2535df9e8692799f31b5338 = useCallback((_e) => addEvents([Event("_alert", {message:`The vulnerability is related to the fact that the code is extracting files from a potentially untrusted source without proper validation. To address this vulnerability, the following measures can be taken:\n\n1. Validate the source of the file before extracting it. This can be done by checking the file extension, file type, or any other relevant information that can help identify the source of the file.\n\n2. Use a secure extraction method that can handle potentially malicious files. For example, instead of using the \`extractall()\` method, use a safer method that can handle malicious files, such as \`extract()\`.\n\n3. Use a sandbox environment to extract the files. This can help prevent any potential damage caused by malicious files.\n\n4. Implement proper error handling to handle any exceptions that may occur during the extraction process.\n\nHere is an example of how the code can be modified to address the vulnerability:\n\n[108]:+\n[109]:+    if is_match_fn(file_path):\n[110]:+      with open_fn(file_path) as archive:\n[111]:+        try:\n[112]:+          # Validate the source of the file before extracting it\n[113]:+          if is_valid_source(archive):\n[114]:+            # Use a secure extraction method that can handle potentially malicious files\n[115]:+            for member in archive:\n[116]:+              if is_valid_file(member):\n[117]:+                archive.extract(member, path)\n[118]:+          else:\n[119]:+            raise Exception(\"Invalid source file\")\n[120]:+        except (tarfile.TarError, RuntimeError, KeyboardInterrupt):\n[121]:+          # Implement proper error handling to handle any exceptions that may occur during the extraction process\n[122]:+          if os.path.exists(path):\n[123]:+            if os.path.isfile(path):\n[124]:+              os.remove(path)\n\nIn this modified code, we have added a new function \`is_valid_source()\` to validate the source of the file before extracting it. We have also replaced the \`extractall()\` method with a safer method that can handle potentially malicious files. Additionally, we have added a new function \`is_valid_file()\` to validate each file before extracting it. Finally, we have added proper error handling to handle any exceptions that may occur during the extraction process.`})], (_e), {}), [addEvents, Event])


  return (
    <RadixThemesButton css={{"background-color": "#0b082b", "color": "white", "border": "0", "border-radius": "30%"}} onClick={on_click_ed90e0bbc2535df9e8692799f31b5338}>
  {`✨`}
</RadixThemesButton>
  )
}

export function Item_525ff245e65aab33123946c85efcdaf2 () {



  return (
    <RadixAccordionItem className={`AccordionItem`} css={{"overflow": "hidden", "width": "100%", "marginTop": "1px", "borderTop": "var(--divider-px) solid var(--gray-a6)", "&:first-child": {"marginTop": 0, "borderTop": 0, "borderTopLeftRadius": "var(--radius-4)", "borderTopRightRadius": "var(--radius-4)"}, "&:last-child": {"borderBottomLeftRadius": "var(--radius-4)", "borderBottomRightRadius": "var(--radius-4)"}, "&:focus-within": {"position": "relative", "zIndex": 1}, "&:first-child[data-variant='ghost'], *:where([data-variant='ghost']) &:first-child": {"borderRadius": 0, "borderTop": "var(--divider-px) solid var(--gray-a6)"}, "&:last-child[data-variant='ghost'], *:where([data-variant='ghost']) &:last-child": {"borderRadius": 0, "borderBottom": "var(--divider-px) solid var(--gray-a6)"}}} value={generateUUID()}>
  <RadixAccordionHeader className={`AccordionHeader`} css={{"display": "flex"}}>
  <RadixAccordionTrigger className={`AccordionTrigger`} css={{"color": "var(--accent-11)", "fontSize": "1.1em", "lineHeight": 1, "justifyContent": "space-between", "alignItems": "center", "flex": 1, "display": "flex", "padding": "var(--space-3) var(--space-4)", "width": "100%", "boxShadow": "0 var(--divider-px) 0 var(--gray-a6)", "&[data-state='open'] > .AccordionChevron": {"transform": "rotate(180deg)"}, "&:hover": {"backgroundColor": "var(--accent-4)"}, "& > .AccordionChevron": {"transition": "transform var(--animation-duration) var(--animation-easing)"}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)", "&:hover": {"backgroundColor": "var(--accent-10)"}, "& > .AccordionChevron": {"color": "var(--accent-contrast)"}}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`py/bind-socket-all-network-interfaces`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`introduced in commit`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/a7da5a0486bc3379aa6acb29997bb63bdaaf7cc2`} passHref={true}>
  {`a7da5a048`}
</NextLink>
</RadixThemesLink>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`by`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/strategist333`} passHref={true}>
  {`strategist333`}
</NextLink>
</RadixThemesLink>
</RadixThemesBox>
  <LucideChevronDownIcon className={`AccordionChevron`} css={{"color": "var(--current-color)"}}/>
</RadixAccordionTrigger>
</RadixAccordionHeader>
  <RadixAccordionContent className={`AccordionContent`} css={{"overflow": "hidden", "color": "var(--accent-11)", "paddingInlineStart": "var(--space-4)", "paddingInlineEnd": "var(--space-4)", "&:before, &:after": {"content": "' '", "display": "block", "height": "var(--space-3)"}, "&[data-state='open']": {"animation": `${slideDown} var(--animation-duration) var(--animation-easing)`}, "&[data-state='closed']": {"animation": `${slideUp} var(--animation-duration) var(--animation-easing)`}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)"}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Binding a socket to all network interfaces: `}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`Binding a socket to all interfaces opens it up to traffic from any IPv4 address
 and is therefore associated with security risks.`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Severity:`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`6.5`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6620f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`security`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Source: `}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/contrib/opt/python/training/variable_clipping_optimizer_test.py`} passHref={true}>
  {`tensorflow/contrib/opt/python/training/variable_clipping_optimizer_test.py:42`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -0,0 +1,172 @@</span>\n<span style='background-color: #ddffdd;'>  33|<span style='color:red;'>    </span>+      return port</span>\n<span style='background-color: #ddffdd;'>  34|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'>  35|<span style='color:red;'>    </span>+    port1 = get_open_port()</span>\n<span style='background-color: #ddffdd;'>  36|<span style='color:red;'>    </span>+    port2 = get_open_port()</span>\n<span style='background-color: #ddffdd;'>  37|<span style='color:red;'>    </span>+    cs = tf.train.ClusterSpec({</span>\n<span style='background-color: #ddffdd;'>  38|<span style='color:red;'>    </span>+        'worker': ['localhost:%s' % port1],</span>\n<span style='background-color: #ddffdd;'>  39|<span style='color:red;'>    </span>+        'ps': ['localhost:%s' % port2]</span>\n<span style='background-color: #ddffdd;'>  40|<span style='color:red;'>    </span>+    })</span>\n<span style='background-color: #ddffdd;'>  41|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'>  42|<span style='color:red;'>    </span>+    worker = tf.train.Server(cs, job_name='worker', start=True)</span>\n<span style='background-color: #ddffdd;'>  43|<span style='color:red;'>    </span>+    ps = tf.train.Server(cs, job_name='ps', start=True)</span>\n<span style='background-color: #ddffdd;'>  44|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'>  45|<span style='color:red;'>    </span>+    return worker, ps</span>\n<span style='background-color: #ddffdd;'>  46|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'>  47|<span style='color:red;'>    </span>+  @contextlib.contextmanager</span>\n<span style='background-color: #ddffdd;'>  48|<span style='color:red;'>    </span>+  def _maybeWithDevice(self, device):</span>\n<span style='background-color: #ddffdd;'>  49|<span style='color:red;'>    </span>+    if device is not None:</span>\n<span style='background-color: #ddffdd;'>  50|<span style='color:red;'>    </span>+      with tf.device(device):</span>\n<span style='background-color: #ddffdd;'>  51|<span style='color:red;'>    </span>+        yield</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <Button_e39075772496f12c9227ab1624195ba5/>
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

export function Item_a06260f95633a88712d25d9935cd7496 () {



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
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/9c390e1697fc463949b90ac4348254fdd482274b`} passHref={true}>
  {`9c390e169`}
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
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/python/debug/cli/debugger_cli_common_test.py`} passHref={true}>
  {`tensorflow/python/debug/cli/debugger_cli_common_test.py:253`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -17,8 +17,12 @@</span>\n<span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -192,6 +196,40 @@ def testMergeRichTextLinesEmptySelf(self):</span>\n<span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -660,7 +698,7 @@ def testWrappingEmptyInput(self):</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <Button_e39075772496f12c9227ab1624195ba5/>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_1089e7a0ab2e12f2948908f430d8a80a () {



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
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/9c390e1697fc463949b90ac4348254fdd482274b`} passHref={true}>
  {`9c390e169`}
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
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/python/debug/cli/curses_ui_test.py`} passHref={true}>
  {`tensorflow/python/debug/cli/curses_ui_test.py:1260`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -19,13 +19,15 @@</span>\n<span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -1125,6 +1127,65 @@ def testScrollTensorByInvalidIndices(self):</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <Button_e39075772496f12c9227ab1624195ba5/>
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


export function Item_f60d986e3082bef1976bd7632588c524 () {



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
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/6c6121d09966e088a8a60263c010873ede6023d4`} passHref={true}>
  {`6c6121d09`}
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
  {`tensorflow/python/debug/cli/readline_ui_test.py:149`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -0,0 +1,166 @@</span>\n<span style='background-color: #ddffdd;'> 140|<span style='color:red;'>    </span>+    ui = MockReadlineUI(on_ui_exit=callback_for_test, command_sequence=['exit'])</span>\n<span style='background-color: #ddffdd;'> 141|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'> 142|<span style='color:red;'>    </span>+    self.assertFalse(observer['callback_invoked'])</span>\n<span style='background-color: #ddffdd;'> 143|<span style='color:red;'>    </span>+    ui.run_ui()</span>\n<span style='background-color: #ddffdd;'> 144|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'> 145|<span style='color:red;'>    </span>+    self.assertEqual(0, len(ui.observers['screen_outputs']))</span>\n<span style='background-color: #ddffdd;'> 146|<span style='color:red;'>    </span>+    self.assertTrue(observer['callback_invoked'])</span>\n<span style='background-color: #ddffdd;'> 147|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'> 148|<span style='color:red;'>    </span>+  def testIncompleteRedirectWorks(self):</span>\n<span style='background-color: #ddffdd;'> 149|<span style='color:red;'>    </span>+    output_path = tempfile.mktemp()</span>\n<span style='background-color: #ddffdd;'> 150|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'> 151|<span style='color:red;'>    </span>+    ui = MockReadlineUI(</span>\n<span style='background-color: #ddffdd;'> 152|<span style='color:red;'>    </span>+        command_sequence=['babble -n 2 > %s' % output_path, 'exit'])</span>\n<span style='background-color: #ddffdd;'> 153|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'> 154|<span style='color:red;'>    </span>+    ui.register_command_handler('babble', self._babble, '')</span>\n<span style='background-color: #ddffdd;'> 155|<span style='color:red;'>    </span>+    ui.run_ui()</span>\n<span style='background-color: #ddffdd;'> 156|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'> 157|<span style='color:red;'>    </span>+    screen_outputs = ui.observers['screen_outputs']</span>\n<span style='background-color: #ddffdd;'> 158|<span style='color:red;'>    </span>+    self.assertEqual(1, len(screen_outputs))</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <Button_e39075772496f12c9227ab1624195ba5/>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_1d2b128bdaee2350867ef2813164e9d0 () {



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
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/1c5b5e8d8deb10ffc613aff016f4caaed7dc5b30`} passHref={true}>
  {`1c5b5e8d8`}
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
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/python/debug/lib/source_utils_test.py`} passHref={true}>
  {`tensorflow/python/debug/lib/source_utils_test.py:223`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -0,0 +1,203 @@</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <Button_e39075772496f12c9227ab1624195ba5/>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_d453bdc276fa446ab5b5403b62698840 () {



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
  {`tensorflow/python/debug/local_cli_test.py:76`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -0,0 +1,72 @@</span>\n<span style='background-color: #ddffdd;'>  67|<span style='color:red;'>    </span>+      local_cli.LocalCLIDebugWrapperSession(</span>\n<span style='background-color: #ddffdd;'>  68|<span style='color:red;'>    </span>+          session.Session(), dump_root=file_path)</span>\n<span style='background-color: #ddffdd;'>  69|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'>  70|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'>  71|<span style='color:red;'>    </span>+if __name__ == '__main__':</span>\n<span style='background-color: #ddffdd;'>  72|<span style='color:red;'>    </span>+  googletest.main()</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <Button_e39075772496f12c9227ab1624195ba5/>
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


export function Item_498f84412c41052abd114764f311f104 () {



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
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/b7f370e24222017ddc07af834ac1e99762e76e0e`} passHref={true}>
  {`b7f370e24`}
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
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/python/debug/cli/curses_ui_test.py`} passHref={true}>
  {`tensorflow/python/debug/cli/curses_ui_test.py:88`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -19,7 +19,6 @@</span>\n<span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -81,6 +80,11 @@ def __init__(self,</span>\n<span style='background-color: #ffffff;'>  80|<span style='color:red;'>81  </span> </span>\n<span style='background-color: #ffffff;'>  81|<span style='color:red;'>82  </span>     curses_ui.CursesUI.__init__(self)</span>\n<span style='background-color: #ffffff;'>  82|<span style='color:red;'>83  </span> </span>\n<span style='background-color: #ddffdd;'>  83|<span style='color:red;'>    </span>+    # Override the default path to the command history file to avoid test</span>\n<span style='background-color: #ddffdd;'>  84|<span style='color:red;'>    </span>+    # concurrency issues.</span>\n<span style='background-color: #ddffdd;'>  85|<span style='color:red;'>    </span>+    self._command_history_store = debugger_cli_common.CommandHistory(</span>\n<span style='background-color: #ddffdd;'>  86|<span style='color:red;'>    </span>+        history_file_path=tempfile.mktemp())</span>\n<span style='background-color: #ddffdd;'>  87|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ffffff;'>  88|<span style='color:red;'>84  </span>   # Below, override the _screen_ prefixed member methods that interact with the</span>\n<span style='background-color: #ffffff;'>  89|<span style='color:red;'>85  </span>   # actual terminal, so that the mock can run in a terminal-less environment.</span>\n<span style='background-color: #ffffff;'>  90|<span style='color:red;'>86  </span> </span>\n<span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -221,13 +225,6 @@ class CursesTest(test_util.TensorFlowTestCase):</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <Button_e39075772496f12c9227ab1624195ba5/>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_1d59078e97b33156529a80ab3ff2a7ae () {



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
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/8b431f0f2e9d23b39e87b7b530e6270ba0c40e29`} passHref={true}>
  {`8b431f0f2`}
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
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/python/debug/debug_data_test.py`} passHref={true}>
  {`tensorflow/python/debug/debug_data_test.py:202`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -0,0 +1,142 @@</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <Button_e39075772496f12c9227ab1624195ba5/>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_246b0f539cc2d4452932636419d45f2b () {



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
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/9c390e1697fc463949b90ac4348254fdd482274b`} passHref={true}>
  {`9c390e169`}
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
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/python/debug/cli/curses_ui_test.py`} passHref={true}>
  {`tensorflow/python/debug/cli/curses_ui_test.py:1223`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -19,13 +19,15 @@</span>\n<span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -1125,6 +1127,65 @@ def testScrollTensorByInvalidIndices(self):</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <Button_e39075772496f12c9227ab1624195ba5/>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_ceb694e0ac58953a115524795d92484c () {



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
  {`tensorflow/python/debug/local_cli_test.py:103`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -0,0 +1,72 @@</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <Button_e39075772496f12c9227ab1624195ba5/>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_2e1f6a34229bfafc25a019238cec2ca7 () {



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
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/2179890199c3561ff3a1297c5e9c073471473a77`} passHref={true}>
  {`217989019`}
</NextLink>
</RadixThemesLink>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`by`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/petewarden`} passHref={true}>
  {`petewarden`}
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
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/examples/image_retraining/retrain.py`} passHref={true}>
  {`tensorflow/examples/image_retraining/retrain.py:305`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -0,0 +1,833 @@</span>\n<span style='background-color: #ddffdd;'> 296|<span style='color:red;'>    </span>+def create_inception_graph():</span>\n<span style='background-color: #ddffdd;'> 297|<span style='color:red;'>    </span>+  ''''Creates a graph from saved GraphDef file and returns a Graph object.</span>\n<span style='background-color: #ddffdd;'> 298|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'> 299|<span style='color:red;'>    </span>+  Returns:</span>\n<span style='background-color: #ddffdd;'> 300|<span style='color:red;'>    </span>+    Graph holding the trained Inception network.</span>\n<span style='background-color: #ddffdd;'> 301|<span style='color:red;'>    </span>+  '''</span>\n<span style='background-color: #ddffdd;'> 302|<span style='color:red;'>    </span>+  with tf.Session() as sess:</span>\n<span style='background-color: #ddffdd;'> 303|<span style='color:red;'>    </span>+    with gfile.FastGFile(</span>\n<span style='background-color: #ddffdd;'> 304|<span style='color:red;'>    </span>+        os.path.join(FLAGS.model_dir, 'classify_image_graph_def.pb'), 'r') as f:</span>\n<span style='background-color: #ddffdd;'> 305|<span style='color:red;'>    </span>+      graph_def = tf.GraphDef()</span>\n<span style='background-color: #ddffdd;'> 306|<span style='color:red;'>    </span>+      graph_def.ParseFromString(f.read())</span>\n<span style='background-color: #ddffdd;'> 307|<span style='color:red;'>    </span>+      _ = tf.import_graph_def(graph_def, name='')</span>\n<span style='background-color: #ddffdd;'> 308|<span style='color:red;'>    </span>+  return sess.graph</span>\n<span style='background-color: #ddffdd;'> 309|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'> 310|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'> 311|<span style='color:red;'>    </span>+def run_bottleneck_on_image(sess, image_data, image_data_tensor_name):</span>\n<span style='background-color: #ddffdd;'> 312|<span style='color:red;'>    </span>+  '''Runs inference on an image to extract the 'bottleneck' summary layer.</span>\n<span style='background-color: #ddffdd;'> 313|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'> 314|<span style='color:red;'>    </span>+  Args:</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <Button_e39075772496f12c9227ab1624195ba5/>
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

export function Item_4248c60b582ed068ba35933d70b07f6e () {



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
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/b7f370e24222017ddc07af834ac1e99762e76e0e`} passHref={true}>
  {`b7f370e24`}
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
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/python/debug/cli/debugger_cli_common_test.py`} passHref={true}>
  {`tensorflow/python/debug/cli/debugger_cli_common_test.py:925`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -905,10 +905,9 @@ def testDeregisterNonexistentContext(self):</span>\n<span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -986,7 +985,8 @@ def testLoadingCommandHistoryFileObeysLimit(self):</span>\n<span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -1002,7 +1002,8 @@ def testCommandHistoryHandlesReadingIOErrorGracoiusly(self):</span>\n<span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -1013,17 +1014,24 @@ def testCommandHistoryHandlesWritingIOErrorGracoiusly(self):</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <Button_e39075772496f12c9227ab1624195ba5/>
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
  {`Backport fixes and improvements from external Keras.
Change: 152867002`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#6c757d", "color": "#fff", "font-size": "14px", "position": "absolute", "right": "1em", "z-index": "1"}}>
  {`b8b8ebcf8`}
</RadixThemesText>
  <RadixThemesBox css={{"display": "flex", "flex-wrap": "wrap", "align-items": "center"}}>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#28a745", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`fchollet`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#17a2b8", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`2017-04-11`}
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
  <Item_6a735695ec7230a72756199ddfb6fa2c/>
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
  <Item_525ff245e65aab33123946c85efcdaf2/>
  <Item_498f84412c41052abd114764f311f104/>
  <Item_246b0f539cc2d4452932636419d45f2b/>
  <Item_1089e7a0ab2e12f2948908f430d8a80a/>
  <Item_6a15716ac51a2340db8a2dda8b066ec9/>
  <Item_1d59078e97b33156529a80ab3ff2a7ae/>
  <Item_a06260f95633a88712d25d9935cd7496/>
  <Item_4248c60b582ed068ba35933d70b07f6e/>
  <Item_d453bdc276fa446ab5b5403b62698840/>
  <Item_ceb694e0ac58953a115524795d92484c/>
  <Item_f60d986e3082bef1976bd7632588c524/>
  <Item_1d2b128bdaee2350867ef2813164e9d0/>
  <Item_2e1f6a34229bfafc25a019238cec2ca7/>
  <Item_6d1cd0f7ba795881a390fbb14a50aefe/>
</RadixAccordionRoot>
</RadixAccordionContent>
</RadixAccordionItem>
</RadixAccordionRoot>
</RadixThemesContainer>
  <NextHead>
  <title>
  {`Reflextest | B8B8Ebcf851D`}
</title>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
