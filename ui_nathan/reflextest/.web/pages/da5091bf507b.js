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



export function Item_a1b0c45445a4b4c5972890ebcc7a8f23 () {



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
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/44cf98028b635ff3dd4145df263b0706ba663924`} passHref={true}>
  {`44cf98028`}
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
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/contrib/rnn/python/tools/checkpoint_convert_test.py`} passHref={true}>
  {`tensorflow/contrib/rnn/python/tools/checkpoint_convert_test.py:36`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -0,0 +1,108 @@</span>\n<span style='background-color: #ddffdd;'>  27|<span style='color:red;'>    </span>+from tensorflow.python.ops import variables</span>\n<span style='background-color: #ddffdd;'>  28|<span style='color:red;'>    </span>+from tensorflow.python.platform import test</span>\n<span style='background-color: #ddffdd;'>  29|<span style='color:red;'>    </span>+from tensorflow.python.training import saver as saver_lib</span>\n<span style='background-color: #ddffdd;'>  30|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'>  31|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'>  32|<span style='color:red;'>    </span>+class CheckpointConvertTest(test.TestCase):</span>\n<span style='background-color: #ddffdd;'>  33|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'>  34|<span style='color:red;'>    </span>+  def setUp(self):</span>\n<span style='background-color: #ddffdd;'>  35|<span style='color:red;'>    </span>+    self._old_ckpt_path = tempfile.mktemp()</span>\n<span style='background-color: #ddffdd;'>  36|<span style='color:red;'>    </span>+    self._new_ckpt_path = tempfile.mktemp()</span>\n<span style='background-color: #ddffdd;'>  37|<span style='color:red;'>    </span>+    ops.reset_default_graph()</span>\n<span style='background-color: #ddffdd;'>  38|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'>  39|<span style='color:red;'>    </span>+  def tearDown(self):</span>\n<span style='background-color: #ddffdd;'>  40|<span style='color:red;'>    </span>+    for file_name in glob.glob(self._old_ckpt_path + '*'):</span>\n<span style='background-color: #ddffdd;'>  41|<span style='color:red;'>    </span>+      os.remove(file_name)</span>\n<span style='background-color: #ddffdd;'>  42|<span style='color:red;'>    </span>+    for file_name in glob.glob(self._new_ckpt_path + '*'):</span>\n<span style='background-color: #ddffdd;'>  43|<span style='color:red;'>    </span>+      os.remove(file_name)</span>\n<span style='background-color: #ddffdd;'>  44|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'>  45|<span style='color:red;'>    </span>+  def testReplacementDictsContainUniqueAndNonEmptyVariableNames(self):</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <Button_e39075772496f12c9227ab1624195ba5/>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_c8a7ab8f63621edcf0327976d8093aad () {



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
  {`tensorflow/python/lib/io/file_io_test.py:609`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -23,7 +23,9 @@</span>\n<span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -582,5 +584,31 @@ def testFileCrc32Binary(self):</span>\n<span style='background-color: #ddffdd;'> 600|<span style='color:red;'>    </span>+      file_io.FileIO(file_path, mode='w').write('testing')</span>\n<span style='background-color: #ddffdd;'> 601|<span style='color:red;'>    </span>+    file_path = os.path.join(noread_path, 'file4.txt')</span>\n<span style='background-color: #ddffdd;'> 602|<span style='color:red;'>    </span>+    file_io.FileIO(file_path, mode='w').write('testing')</span>\n<span style='background-color: #ddffdd;'> 603|<span style='color:red;'>    </span>+    # Change noread to noread access.</span>\n<span style='background-color: #ddffdd;'> 604|<span style='color:red;'>    </span>+    os.chmod(noread_path, 0)</span>\n<span style='background-color: #ddffdd;'> 605|<span style='color:red;'>    </span>+    expected_match = [compat.as_bytes(dir_path)]</span>\n<span style='background-color: #ddffdd;'> 606|<span style='color:red;'>    </span>+    with self.test_session() as sess:</span>\n<span style='background-color: #ddffdd;'> 607|<span style='color:red;'>    </span>+      self.assertItemsEqual(</span>\n<span style='background-color: #ddffdd;'> 608|<span style='color:red;'>    </span>+          gen_io_ops.matching_files(dir_path).eval(), expected_match)</span>\n<span style='background-color: #ddffdd;'> 609|<span style='color:red;'>    </span>+    # Change noread back so that it could be cleaned during tearDown.</span>\n<span style='background-color: #ddffdd;'> 610|<span style='color:red;'>    </span>+    os.chmod(noread_path, 0o777)</span>\n<span style='background-color: #ddffdd;'> 611|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'> 612|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ffffff;'> 613|<span style='color:red;'>585 </span> if __name__ == '__main__':</span>\n<span style='background-color: #ffffff;'> 614|<span style='color:red;'>586 </span>   test.main()</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
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

export function Item_e8b45a132477c5d4bbc8e38beb684ee6 () {



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
  {`tensorflow/contrib/learn/python/learn/datasets/text_datasets.py:48`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -1,17 +1,20 @@</span>\n<span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -22,25 +25,25 @@</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>39  </span>-    test = base.load_csv(test_path, np.int32, 0, has_header=False)</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>40  </span>-    datasets = base.Datasets(train=train, validation=None, test=test)</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>41  </span>-    return datasets</span>\n<span style='background-color: #ddffdd;'>  39|<span style='color:red;'>    </span>+    archive_path = base.maybe_download(</span>\n<span style='background-color: #ddffdd;'>  40|<span style='color:red;'>    </span>+        'dbpedia_csv.tar.gz', data_dir, DBPEDIA_URL)</span>\n<span style='background-color: #ddffdd;'>  41|<span style='color:red;'>    </span>+    tfile = tarfile.open(archive_path, 'r:*')</span>\n<span style='background-color: #ddffdd;'>  42|<span style='color:red;'>    </span>+    tfile.extractall(data_dir)</span>\n<span style='background-color: #ddffdd;'>  43|<span style='color:red;'>    </span>+  train = base.load_csv(train_path, np.int32, 0, has_header=False)</span>\n<span style='background-color: #ddffdd;'>  44|<span style='color:red;'>    </span>+  test = base.load_csv(test_path, np.int32, 0, has_header=False)</span>\n<span style='background-color: #ddffdd;'>  45|<span style='color:red;'>    </span>+  return base.Datasets(train=train, validation=None, test=test)</span>\n<span style='background-color: #ffffff;'>  46|<span style='color:red;'>42  </span> </span>\n<span style='background-color: #ffffff;'>  47|<span style='color:red;'>43  </span> </span>\n<span style='background-color: #ffffff;'>  48|<span style='color:red;'>44  </span> def load_dbpedia():</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>45  </span>-    return get_dbpedia('dbpedia_data')</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>46  </span>-</span>\n<span style='background-color: #ddffdd;'>  49|<span style='color:red;'>    </span>+  return get_dbpedia('dbpedia_data')</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <Button_e39075772496f12c9227ab1624195ba5/>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_8bc5fe9f8d283046d3cb349ae827e15b () {



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


export function Item_d3e9e569c50f29f38ae69fbcd0efbc15 () {



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
  {`tensorflow/contrib/distribute/python/keras_utils_test.py:560`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -0,0 +1,471 @@</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <Button_e39075772496f12c9227ab1624195ba5/>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_fbd3cc87281645f115342f0af3bd8a59 () {



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
  {`tensorflow/python/framework/test_util.py:1833`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -24,6 +24,7 @@</span>\n<span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -868,6 +869,19 @@ def device(use_gpu):</span>\n<span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -934,6 +948,52 @@ def get_temp_dir(self):</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <Button_e39075772496f12c9227ab1624195ba5/>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_287aa835e303c961a35fd290deade695 () {



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
  <Button_e39075772496f12c9227ab1624195ba5/>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_f52a3124fc22997d558211aa92009b52 () {



  return (
    <RadixAccordionItem className={`AccordionItem`} css={{"overflow": "hidden", "width": "100%", "marginTop": "1px", "borderTop": "var(--divider-px) solid var(--gray-a6)", "&:first-child": {"marginTop": 0, "borderTop": 0, "borderTopLeftRadius": "var(--radius-4)", "borderTopRightRadius": "var(--radius-4)"}, "&:last-child": {"borderBottomLeftRadius": "var(--radius-4)", "borderBottomRightRadius": "var(--radius-4)"}, "&:focus-within": {"position": "relative", "zIndex": 1}, "&:first-child[data-variant='ghost'], *:where([data-variant='ghost']) &:first-child": {"borderRadius": 0, "borderTop": "var(--divider-px) solid var(--gray-a6)"}, "&:last-child[data-variant='ghost'], *:where([data-variant='ghost']) &:last-child": {"borderRadius": 0, "borderBottom": "var(--divider-px) solid var(--gray-a6)"}}} value={generateUUID()}>
  <RadixAccordionHeader className={`AccordionHeader`} css={{"display": "flex"}}>
  <RadixAccordionTrigger className={`AccordionTrigger`} css={{"color": "var(--accent-11)", "fontSize": "1.1em", "lineHeight": 1, "justifyContent": "space-between", "alignItems": "center", "flex": 1, "display": "flex", "padding": "var(--space-3) var(--space-4)", "width": "100%", "boxShadow": "0 var(--divider-px) 0 var(--gray-a6)", "&[data-state='open'] > .AccordionChevron": {"transform": "rotate(180deg)"}, "&:hover": {"backgroundColor": "var(--accent-4)"}, "& > .AccordionChevron": {"transition": "transform var(--animation-duration) var(--animation-easing)"}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)", "&:hover": {"backgroundColor": "var(--accent-10)"}, "& > .AccordionChevron": {"color": "var(--accent-contrast)"}}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6b20f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`py/insecure-protocol`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`introduced in commit`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/8530167f68673fa756565c0394bbe2dcdc39db05`} passHref={true}>
  {`8530167f6`}
</NextLink>
</RadixThemesLink>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`by`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/dmitrievanthony`} passHref={true}>
  {`dmitrievanthony`}
</NextLink>
</RadixThemesLink>
</RadixThemesBox>
  <LucideChevronDownIcon className={`AccordionChevron`} css={{"color": "var(--current-color)"}}/>
</RadixAccordionTrigger>
</RadixAccordionHeader>
  <RadixAccordionContent className={`AccordionContent`} css={{"overflow": "hidden", "color": "var(--accent-11)", "paddingInlineStart": "var(--space-4)", "paddingInlineEnd": "var(--space-4)", "&:before, &:after": {"content": "' '", "display": "block", "height": "var(--space-3)"}, "&[data-state='open']": {"animation": `${slideDown} var(--animation-duration) var(--animation-easing)`}, "&[data-state='closed']": {"animation": `${slideUp} var(--animation-duration) var(--animation-easing)`}, "&[data-variant='classic'], *:where([data-variant='classic']) &": {"color": "var(--accent-contrast)"}}}>
  <RadixThemesBox>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Use of insecure SSL/TLS version: `}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`Using an insecure SSL/TLS version may leave the connection vulnerable to attacks.`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Severity:`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6b20f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`7.5`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#d6b20f", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`security`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`} css={{"display": "inline", "fontWeight": "bold"}}>
  {`Source: `}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/contrib/ignite/python/ops/ignite_dataset_ops.py`} passHref={true}>
  {`tensorflow/contrib/ignite/python/ops/ignite_dataset_ops.py:122`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -0,0 +1,763 @@</span>\n<span style='background-color: #ddffdd;'> 113|<span style='color:red;'>    </span>+    if certfile is not None:</span>\n<span style='background-color: #ddffdd;'> 114|<span style='color:red;'>    </span>+      context = ssl.SSLContext(ssl.PROTOCOL_SSLv23)</span>\n<span style='background-color: #ddffdd;'> 115|<span style='color:red;'>    </span>+      context.load_cert_chain(certfile, keyfile, password)</span>\n<span style='background-color: #ddffdd;'> 116|<span style='color:red;'>    </span>+      self.sock = context.wrap_socket(self.sock)</span>\n<span style='background-color: #ddffdd;'> 117|<span style='color:red;'>    </span>+    else:</span>\n<span style='background-color: #ddffdd;'> 118|<span style='color:red;'>    </span>+      if keyfile is not None:</span>\n<span style='background-color: #ddffdd;'> 119|<span style='color:red;'>    </span>+        raise Exception('SSL is disabled, keyfile must not be specified \\</span>\n<span style='background-color: #ddffdd;'> 120|<span style='color:red;'>    </span>+          (to enable SSL specify certfile)')</span>\n<span style='background-color: #ddffdd;'> 121|<span style='color:red;'>    </span>+      if password is not None:</span>\n<span style='background-color: #ddffdd;'> 122|<span style='color:red;'>    </span>+        raise Exception('SSL is disabled, password must not be specified \\</span>\n<span style='background-color: #ddffdd;'> 123|<span style='color:red;'>    </span>+          (to enable SSL specify certfile)')</span>\n<span style='background-color: #ddffdd;'> 124|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'> 125|<span style='color:red;'>    </span>+    self.host = host</span>\n<span style='background-color: #ddffdd;'> 126|<span style='color:red;'>    </span>+    self.port = port</span>\n<span style='background-color: #ddffdd;'> 127|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'> 128|<span style='color:red;'>    </span>+  def __enter__(self):</span>\n<span style='background-color: #ddffdd;'> 129|<span style='color:red;'>    </span>+    '''Connects to host and port specified in the constructor.'''</span>\n<span style='background-color: #ddffdd;'> 130|<span style='color:red;'>    </span>+    self.sock.connect((self.host, self.port))</span>\n<span style='background-color: #ddffdd;'> 131|<span style='color:red;'>    </span>+    return self</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <Button_e39075772496f12c9227ab1624195ba5/>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_b4161232384bbb63c106747468ce3378 () {



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
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/7ece1c0b8e527d59d8082cd6428cd255e5700074`} passHref={true}>
  {`7ece1c0b8`}
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
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/contrib/model_pruning/examples/cifar10/cifar10_pruning.py`} passHref={true}>
  {`tensorflow/contrib/model_pruning/examples/cifar10/cifar10_pruning.py:403`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -0,0 +1,395 @@</span>\n<span style='background-color: #ddffdd;'> 394|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'> 395|<span style='color:red;'>    </span>+  tarfile.open(filepath, 'r:gz').extractall(dest_directory)</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
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


export function Item_22ff18fd3b2f52093950a6a9b4f448b7 () {



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
  <Button_e39075772496f12c9227ab1624195ba5/>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_8f380068270d607c956bc26ddd88b6fc () {



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
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/8b0c84d30d957596cbb3bcac9245e114c3f0b65b`} passHref={true}>
  {`8b0c84d30`}
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
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/python/debug/examples/debug_tflearn_iris.py`} passHref={true}>
  {`tensorflow/python/debug/examples/debug_tflearn_iris.py:61`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -58,8 +58,11 @@ def test_input_fn():</span>\n<span style='background-color: #ffffff;'>  58|<span style='color:red;'>58  </span>         'exclusive.')</span>\n<span style='background-color: #ffffff;'>  59|<span style='color:red;'>59  </span>   hooks = []</span>\n<span style='background-color: #ffffff;'>  60|<span style='color:red;'>60  </span>   if FLAGS.debug:</span>\n<span style='background-color: #ddffdd;'>  61|<span style='color:red;'>    </span>+    config_file_path = (tempfile.mktemp('.tfdbg_config')</span>\n<span style='background-color: #ddffdd;'>  62|<span style='color:red;'>    </span>+                        if FLAGS.use_random_config_path else None)</span>\n<span style='background-color: #ffffff;'>  63|<span style='color:red;'>61  </span>     hooks.append(tf_debug.LocalCLIDebugHook(ui_type=FLAGS.ui_type,</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>62  </span>-                                            dump_root=FLAGS.dump_root))</span>\n<span style='background-color: #ddffdd;'>  64|<span style='color:red;'>    </span>+                                            dump_root=FLAGS.dump_root,</span>\n<span style='background-color: #ddffdd;'>  65|<span style='color:red;'>    </span>+                                            config_file_path=config_file_path))</span>\n<span style='background-color: #ffffff;'>  66|<span style='color:red;'>63  </span>   elif FLAGS.tensorboard_debug_address:</span>\n<span style='background-color: #ffffff;'>  67|<span style='color:red;'>64  </span>     hooks.append(tf_debug.TensorBoardDebugHook(FLAGS.tensorboard_debug_address))</span>\n<span style='background-color: #ffffff;'>  68|<span style='color:red;'>65  </span> </span>\n<span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -122,6 +125,14 @@ def test_input_fn():</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <Button_e39075772496f12c9227ab1624195ba5/>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_e6fe96c3f9147d28582603572ce54fd7 () {



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
  {`tensorflow/contrib/distribute/python/keras_utils_test.py:596`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -508,8 +508,7 @@ def test_save_load_h5(self, distribution):</span>\n<span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -527,6 +526,27 @@ def test_save_load_trackable(self, distribution):</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <Button_e39075772496f12c9227ab1624195ba5/>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_b3ceb4e2eb72a8cf1ae3ba555f5ccbeb () {



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
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/8b0c84d30d957596cbb3bcac9245e114c3f0b65b`} passHref={true}>
  {`8b0c84d30`}
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
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/python/debug/examples/debug_errors.py`} passHref={true}>
  {`tensorflow/python/debug/examples/debug_errors.py:45`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -19,6 +19,7 @@</span>\n<span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -41,10 +42,12 @@ def main(_):</span>\n<span style='background-color: #ffffff;'>  42|<span style='color:red;'>41  </span>   z = tf.matmul(m, v, name='z')</span>\n<span style='background-color: #ffffff;'>  43|<span style='color:red;'>42  </span> </span>\n<span style='background-color: #ffffff;'>  44|<span style='color:red;'>43  </span>   if FLAGS.debug:</span>\n<span style='background-color: #ddffdd;'>  45|<span style='color:red;'>    </span>+    config_file_path = (tempfile.mktemp('.tfdbg_config')</span>\n<span style='background-color: #ddffdd;'>  46|<span style='color:red;'>    </span>+                        if FLAGS.use_random_config_path else None)</span>\n<span style='background-color: #ffffff;'>  47|<span style='color:red;'>44  </span>     sess = tf_debug.LocalCLIDebugWrapperSession(</span>\n<span style='background-color: #ffffff;'>  48|<span style='color:red;'>45  </span>         sess,</span>\n<span style='background-color: #ffffff;'>  49|<span style='color:red;'>46  </span>         ui_type=FLAGS.ui_type,</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>47  </span>-        use_random_config_path=FLAGS.use_random_config_path)</span>\n<span style='background-color: #ddffdd;'>  50|<span style='color:red;'>    </span>+        config_file_path=config_file_path)</span>\n<span style='background-color: #ffffff;'>  51|<span style='color:red;'>48  </span> </span>\n<span style='background-color: #ffffff;'>  52|<span style='color:red;'>49  </span>   if FLAGS.error == 'shape_mismatch':</span>\n<span style='background-color: #ffffff;'>  53|<span style='color:red;'>50  </span>     print(sess.run(y, feed_dict={ph_float: np.array([[0.0], [1.0], [2.0]])}))</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <Button_e39075772496f12c9227ab1624195ba5/>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_eb2759c23d28e483e349eac3e6aab6f8 () {



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
  <Button_e39075772496f12c9227ab1624195ba5/>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_06a6285b2c187fd780b15517abf2e206 () {



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
  {`tensorflow/python/saved_model/load_test.py:194`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -19,11 +19,13 @@</span>\n<span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -46,6 +48,37 @@ def test_structure_import(self):</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <Button_e39075772496f12c9227ab1624195ba5/>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_a437d80df1f3d8c5934fd481755f0651 () {



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
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/8b0c84d30d957596cbb3bcac9245e114c3f0b65b`} passHref={true}>
  {`8b0c84d30`}
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
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/python/debug/examples/debug_mnist.py`} passHref={true}>
  {`tensorflow/python/debug/examples/debug_mnist.py:129`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -26,6 +26,7 @@</span>\n<span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -125,10 +126,12 @@ def nn_layer(input_tensor, input_dim, output_dim, layer_name, act=tf.nn.relu):</span>\n<span style='background-color: #ffffff;'> 126|<span style='color:red;'>125 </span>         'The --debug and --tensorboard_debug_address flags are mutually '</span>\n<span style='background-color: #ffffff;'> 127|<span style='color:red;'>126 </span>         'exclusive.')</span>\n<span style='background-color: #ffffff;'> 128|<span style='color:red;'>127 </span>   if FLAGS.debug:</span>\n<span style='background-color: #ddffdd;'> 129|<span style='color:red;'>    </span>+    config_file_path = (tempfile.mktemp('.tfdbg_config')</span>\n<span style='background-color: #ddffdd;'> 130|<span style='color:red;'>    </span>+                        if FLAGS.use_random_config_path else None)</span>\n<span style='background-color: #ffffff;'> 131|<span style='color:red;'>128 </span>     sess = tf_debug.LocalCLIDebugWrapperSession(</span>\n<span style='background-color: #ffffff;'> 132|<span style='color:red;'>129 </span>         sess,</span>\n<span style='background-color: #ffffff;'> 133|<span style='color:red;'>130 </span>         ui_type=FLAGS.ui_type,</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>131 </span>-        use_random_config_path=FLAGS.use_random_config_path)</span>\n<span style='background-color: #ddffdd;'> 134|<span style='color:red;'>    </span>+        config_file_path=config_file_path)</span>\n<span style='background-color: #ffffff;'> 135|<span style='color:red;'>132 </span>   elif FLAGS.tensorboard_debug_address:</span>\n<span style='background-color: #ffffff;'> 136|<span style='color:red;'>133 </span>     sess = tf_debug.TensorBoardDebugWrapperSession(</span>\n<span style='background-color: #ffffff;'> 137|<span style='color:red;'>134 </span>         sess, FLAGS.tensorboard_debug_address)</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <Button_e39075772496f12c9227ab1624195ba5/>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_99ebc6397434a021069360c79c4206b1 () {



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

export function Item_441d6642f9602e8fc8b602fb98590dc1 () {



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
  {`da5091bf507b`}
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
  {`tensorflow/examples/speech_commands/input_data.py:243`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -240,7 +240,7 @@ def _progress(count, block_size, total_size):</span>\n<span style='background-color: #ffffff;'> 240|<span style='color:red;'>240 </span>       statinfo = os.stat(filepath)</span>\n<span style='background-color: #ffffff;'> 241|<span style='color:red;'>241 </span>       tf.compat.v1.logging.info('Successfully downloaded %s (%d bytes)',</span>\n<span style='background-color: #ffffff;'> 242|<span style='color:red;'>242 </span>                                 filename, statinfo.st_size)</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>243 </span>-    tarfile.open(filepath, 'r:gz').extractall(dest_directory)</span>\n<span style='background-color: #ddffdd;'> 243|<span style='color:red;'>    </span>+      tarfile.open(filepath, 'r:gz').extractall(dest_directory)</span>\n<span style='background-color: #ffffff;'> 244|<span style='color:red;'>244 </span> </span>\n<span style='background-color: #ffffff;'> 245|<span style='color:red;'>245 </span>   def prepare_data_index(self, silence_percentage, unknown_percentage,</span>\n<span style='background-color: #ffffff;'> 246|<span style='color:red;'>246 </span>                          wanted_words, validation_percentage,</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <Button_e39075772496f12c9227ab1624195ba5/>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_a940abe6b5e5b9902b0306c44426f4ea () {



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
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/44cf98028b635ff3dd4145df263b0706ba663924`} passHref={true}>
  {`44cf98028`}
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
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/contrib/rnn/python/tools/checkpoint_convert_test.py`} passHref={true}>
  {`tensorflow/contrib/rnn/python/tools/checkpoint_convert_test.py:35`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -0,0 +1,108 @@</span>\n<span style='background-color: #ddffdd;'>  26|<span style='color:red;'>    </span>+from tensorflow.python.framework import ops</span>\n<span style='background-color: #ddffdd;'>  27|<span style='color:red;'>    </span>+from tensorflow.python.ops import variables</span>\n<span style='background-color: #ddffdd;'>  28|<span style='color:red;'>    </span>+from tensorflow.python.platform import test</span>\n<span style='background-color: #ddffdd;'>  29|<span style='color:red;'>    </span>+from tensorflow.python.training import saver as saver_lib</span>\n<span style='background-color: #ddffdd;'>  30|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'>  31|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'>  32|<span style='color:red;'>    </span>+class CheckpointConvertTest(test.TestCase):</span>\n<span style='background-color: #ddffdd;'>  33|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'>  34|<span style='color:red;'>    </span>+  def setUp(self):</span>\n<span style='background-color: #ddffdd;'>  35|<span style='color:red;'>    </span>+    self._old_ckpt_path = tempfile.mktemp()</span>\n<span style='background-color: #ddffdd;'>  36|<span style='color:red;'>    </span>+    self._new_ckpt_path = tempfile.mktemp()</span>\n<span style='background-color: #ddffdd;'>  37|<span style='color:red;'>    </span>+    ops.reset_default_graph()</span>\n<span style='background-color: #ddffdd;'>  38|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'>  39|<span style='color:red;'>    </span>+  def tearDown(self):</span>\n<span style='background-color: #ddffdd;'>  40|<span style='color:red;'>    </span>+    for file_name in glob.glob(self._old_ckpt_path + '*'):</span>\n<span style='background-color: #ddffdd;'>  41|<span style='color:red;'>    </span>+      os.remove(file_name)</span>\n<span style='background-color: #ddffdd;'>  42|<span style='color:red;'>    </span>+    for file_name in glob.glob(self._new_ckpt_path + '*'):</span>\n<span style='background-color: #ddffdd;'>  43|<span style='color:red;'>    </span>+      os.remove(file_name)</span>\n<span style='background-color: #ddffdd;'>  44|<span style='color:red;'>    </span>+</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <Button_e39075772496f12c9227ab1624195ba5/>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_062b93114069be9ed5a92ac7c49fe129 () {



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
  <Button_e39075772496f12c9227ab1624195ba5/>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_55913fc673c02016fdbf2eef538b78c3 () {



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
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/e1a7a2ded90fbbdfc3a41954a332a04c73dd62c6`} passHref={true}>
  {`e1a7a2ded`}
</NextLink>
</RadixThemesLink>
  <RadixThemesText as={`p`} css={{"display": "inline"}}>
  {`by`}
</RadixThemesText>
  <RadixThemesLink asChild={true} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#384252", "color": "#fff", "font-size": "12px", "display": "inline", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`https://github.com/lxuechen`} passHref={true}>
  {`lxuechen`}
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
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/contrib/eager/python/examples/revnet/cifar_tfrecords.py`} passHref={true}>
  {`tensorflow/contrib/eager/python/examples/revnet/cifar_tfrecords.py:51`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -0,0 +1,123 @@</span>\n<span style='background-color: #ddffdd;'>  42|<span style='color:red;'>    </span>+  filepath = os.path.join(data_dir, CIFAR_FILENAME)</span>\n<span style='background-color: #ddffdd;'>  43|<span style='color:red;'>    </span>+  if tf.gfile.Exists(filepath):</span>\n<span style='background-color: #ddffdd;'>  44|<span style='color:red;'>    </span>+    return filepath</span>\n<span style='background-color: #ddffdd;'>  45|<span style='color:red;'>    </span>+  if not tf.gfile.Exists(data_dir):</span>\n<span style='background-color: #ddffdd;'>  46|<span style='color:red;'>    </span>+    tf.gfile.MakeDirs(data_dir)</span>\n<span style='background-color: #ddffdd;'>  47|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'>  48|<span style='color:red;'>    </span>+  urllib.request.urlretrieve(CIFAR_DOWNLOAD_URL, filepath)</span>\n<span style='background-color: #ddffdd;'>  49|<span style='color:red;'>    </span>+  tarfile.open(os.path.join(filepath), 'r:gz').extractall(data_dir)</span>\n<span style='background-color: #ddffdd;'>  50|<span style='color:red;'>    </span>+  return filepath</span>\n<span style='background-color: #ddffdd;'>  51|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'>  52|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'>  53|<span style='color:red;'>    </span>+def _int64_feature(value):</span>\n<span style='background-color: #ddffdd;'>  54|<span style='color:red;'>    </span>+  return tf.train.Feature(int64_list=tf.train.Int64List(value=[value]))</span>\n<span style='background-color: #ddffdd;'>  55|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'>  56|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'>  57|<span style='color:red;'>    </span>+def _bytes_feature(value):</span>\n<span style='background-color: #ddffdd;'>  58|<span style='color:red;'>    </span>+  return tf.train.Feature(bytes_list=tf.train.BytesList(value=[value]))</span>\n<span style='background-color: #ddffdd;'>  59|<span style='color:red;'>    </span>+</span>\n<span style='background-color: #ddffdd;'>  60|<span style='color:red;'>    </span>+</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <Button_e39075772496f12c9227ab1624195ba5/>
</RadixThemesBox>
</RadixAccordionContent>
</RadixAccordionItem>
  )
}

export function Item_c4da8385f2934b7b09e98c8cb4ff1516 () {



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
  <NextLink href={`https://github.com/tensorflow/tensorflow/commit/8b0c84d30d957596cbb3bcac9245e114c3f0b65b`} passHref={true}>
  {`8b0c84d30`}
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
  <NextLink href={`https://github.com/tensorflow/tensorflow/tree/master/tensorflow/python/debug/examples/debug_keras.py`} passHref={true}>
  {`tensorflow/python/debug/examples/debug_keras.py:45`}
</NextLink>
</RadixThemesLink>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "\n    <iframe srcdoc=\"\n    <script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'></script>  \n        <pre class='prettyprint lang-py' style=' background-color:initial;  color: initial;border:0;'>  \n    <span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -20,6 +20,7 @@</span>\n<span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -41,7 +42,12 @@ def main(_):</span>\n<span style='background-color: #ffffff;'>  42|<span style='color:red;'>41  </span>   sess = tf.Session()</span>\n<span style='background-color: #ffffff;'>  43|<span style='color:red;'>42  </span>   if FLAGS.debug:</span>\n<span style='background-color: #ffffff;'>  44|<span style='color:red;'>43  </span>     # Use the command-line interface (CLI) of tfdbg.</span>\n<span style='background-color: #ffdddd;'>    |<span style='color:red;'>44  </span>-    sess = tf_debug.LocalCLIDebugWrapperSession(sess, ui_type=FLAGS.ui_type)</span>\n<span style='background-color: #ddffdd;'>  45|<span style='color:red;'>    </span>+    config_file_path = (tempfile.mktemp('.tfdbg_config')</span>\n<span style='background-color: #ddffdd;'>  46|<span style='color:red;'>    </span>+                        if FLAGS.use_random_config_path else None)</span>\n<span style='background-color: #ddffdd;'>  47|<span style='color:red;'>    </span>+    sess = tf_debug.LocalCLIDebugWrapperSession(</span>\n<span style='background-color: #ddffdd;'>  48|<span style='color:red;'>    </span>+        sess,</span>\n<span style='background-color: #ddffdd;'>  49|<span style='color:red;'>    </span>+        ui_type=FLAGS.ui_type,</span>\n<span style='background-color: #ddffdd;'>  50|<span style='color:red;'>    </span>+        config_file_path=config_file_path)</span>\n<span style='background-color: #ffffff;'>  51|<span style='color:red;'>45  </span>   elif FLAGS.tensorboard_debug_address:</span>\n<span style='background-color: #ffffff;'>  52|<span style='color:red;'>46  </span>     # Use the TensorBoard Debugger Plugin (GUI of tfdbg).</span>\n<span style='background-color: #ffffff;'>  53|<span style='color:red;'>47  </span>     sess = tf_debug.TensorBoardDebugWrapperSession(</span>\n<span style='background-color: #dddddd;'>    <span style='color:red;'>    </span>@@ -73,6 +79,14 @@ def main(_):</span>\n    </pre>\n    \" style=\"width:100%; height:100%; border:0;\"></iframe>\n    "}}/>
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
  {`fix changes during last commit`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#6c757d", "color": "#fff", "font-size": "14px", "position": "absolute", "right": "1em", "z-index": "1"}}>
  {`da5091bf5`}
</RadixThemesText>
  <RadixThemesBox css={{"display": "flex", "flex-wrap": "wrap", "align-items": "center"}}>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#28a745", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`fwcore`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#17a2b8", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`2019-08-02`}
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
  <Item_441d6642f9602e8fc8b602fb98590dc1/>
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
  <Item_f52a3124fc22997d558211aa92009b52/>
  <Item_a940abe6b5e5b9902b0306c44426f4ea/>
  <Item_a1b0c45445a4b4c5972890ebcc7a8f23/>
  <Item_b3ceb4e2eb72a8cf1ae3ba555f5ccbeb/>
  <Item_c4da8385f2934b7b09e98c8cb4ff1516/>
  <Item_a437d80df1f3d8c5934fd481755f0651/>
  <Item_8f380068270d607c956bc26ddd88b6fc/>
  <Item_d3e9e569c50f29f38ae69fbcd0efbc15/>
  <Item_e6fe96c3f9147d28582603572ce54fd7/>
  <Item_06a6285b2c187fd780b15517abf2e206/>
  <Item_8bc5fe9f8d283046d3cb349ae827e15b/>
  <Item_eb2759c23d28e483e349eac3e6aab6f8/>
  <Item_99ebc6397434a021069360c79c4206b1/>
  <Item_22ff18fd3b2f52093950a6a9b4f448b7/>
  <Item_fbd3cc87281645f115342f0af3bd8a59/>
  <Item_287aa835e303c961a35fd290deade695/>
  <Item_062b93114069be9ed5a92ac7c49fe129/>
  <Item_b4161232384bbb63c106747468ce3378/>
  <Item_55913fc673c02016fdbf2eef538b78c3/>
  <Item_e8b45a132477c5d4bbc8e38beb684ee6/>
  <Item_c8a7ab8f63621edcf0327976d8093aad/>
</RadixAccordionRoot>
</RadixAccordionContent>
</RadixAccordionItem>
</RadixAccordionRoot>
</RadixThemesContainer>
  <NextHead>
  <title>
  {`Reflextest | Da5091Bf507B`}
</title>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
