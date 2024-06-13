/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext } from "/utils/context"
import { Event, getBackendURL, isTrue, refs } from "/utils/state"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "/env.json"
import { Box as RadixThemesBox, Container as RadixThemesContainer, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import { Legend as RechartsLegend, Line as RechartsLine, ResponsiveContainer as RechartsResponsiveContainer, XAxis as RechartsXAxis, YAxis as RechartsYAxis } from "recharts"
import dynamic from "next/dynamic"
import NextLink from "next/link"
import NextHead from "next/head"

const RechartsLineChart = dynamic(() => import('recharts').then((mod) => mod.LineChart), { ssr: false });


export function Link_4302a7ccd464c17b509f622fdf8aa9a4 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_278e3724899f2fbf21cf87fedba5c538 = useCallback((_e) => addEvents([Event("state.mystate.clickcommit", {value:`d25dd807485c`})], (_e), {}), [addEvents, Event])


  return (
    <RadixThemesLink asChild={true} css={{"color": "black", "&:hover": {"color": "var(--accent-8)"}}} onClick={on_click_278e3724899f2fbf21cf87fedba5c538}>
  <NextLink href={`/d25dd807485c`} passHref={true}>
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
</NextLink>
</RadixThemesLink>
  )
}

export function Link_64d54379dab2d92aa80ef67f3d47c36b () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_8d944970b9297dfc8066aa81015d77ab = useCallback((_e) => addEvents([Event("state.mystate.clickcommit", {value:`5a7786812dd4`})], (_e), {}), [addEvents, Event])


  return (
    <RadixThemesLink asChild={true} css={{"color": "black", "&:hover": {"color": "var(--accent-8)"}}} onClick={on_click_8d944970b9297dfc8066aa81015d77ab}>
  <NextLink href={`/5a7786812dd4`} passHref={true}>
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
</NextLink>
</RadixThemesLink>
  )
}

export function Link_3813e15b4ec9d8edd8e530ae629a41bb () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_7c711ca937847ddb851086988fee3455 = useCallback((_e) => addEvents([Event("state.mystate.clickcommit", {value:`a632c89dd778`})], (_e), {}), [addEvents, Event])


  return (
    <RadixThemesLink asChild={true} css={{"color": "black", "&:hover": {"color": "var(--accent-8)"}}} onClick={on_click_7c711ca937847ddb851086988fee3455}>
  <NextLink href={`/a632c89dd778`} passHref={true}>
  <Fragment>
  <RadixThemesBox css={{"display": "flex", "flex-direction": "column", "align-items": "flex-start", "justify-content": "space-between", "margin-bottom": "0", "padding": "10px", "border": "1px solid #ddd", "border-radius": "6px", "position": "relative", "background-color": "#ffeeaa", "&:hover": {"background-color": "#eee", "box-shadow": "0 0 10px rgba(0, 0, 0, 0.1)"}}}>
  <RadixThemesText as={`p`} css={{"width": "80%"}}>
  {`[XLA:GPU] Land xla_gpu_enable_all_reduce_splitter by default.`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#6c757d", "color": "#fff", "font-size": "14px", "position": "absolute", "right": "1em", "z-index": "1"}}>
  {`a632c89dd`}
</RadixThemesText>
  <RadixThemesBox css={{"display": "flex", "flex-wrap": "wrap", "align-items": "center"}}>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#28a745", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`golechwierowicz`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"padding": "8px 11px", "margin": "5px", "border-radius": "12px", "background-color": "#17a2b8", "color": "#fff", "font-size": "12px", "display": "inline"}}>
  {`2024-06-07`}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesBox>
</Fragment>
</NextLink>
</RadixThemesLink>
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

export function Link_ce1c17616e5c7f17728c4aed2bdfa904 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_971ca1137fbd500efbac55e440a078a8 = useCallback((_e) => addEvents([Event("state.mystate.clickcommit", {value:`b8b8ebcf851d`})], (_e), {}), [addEvents, Event])


  return (
    <RadixThemesLink asChild={true} css={{"color": "black", "&:hover": {"color": "var(--accent-8)"}}} onClick={on_click_971ca1137fbd500efbac55e440a078a8}>
  <NextLink href={`/b8b8ebcf851d`} passHref={true}>
  <Fragment>
  <RadixThemesBox css={{"display": "flex", "flex-direction": "column", "align-items": "flex-start", "justify-content": "space-between", "margin-bottom": "0", "padding": "10px", "border": "1px solid #ddd", "border-radius": "6px", "position": "relative", "background-color": "#ddffdd", "&:hover": {"background-color": "#eee", "box-shadow": "0 0 10px rgba(0, 0, 0, 0.1)"}}}>
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
</NextLink>
</RadixThemesLink>
  )
}

export function Link_3b53a49c5dfc89d8840b3b2fb4c38209 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_cd52377c93c41b0c569427dc7c014d4b = useCallback((_e) => addEvents([Event("state.mystate.clickcommit", {value:`da5091bf507b`})], (_e), {}), [addEvents, Event])


  return (
    <RadixThemesLink asChild={true} css={{"color": "black", "&:hover": {"color": "var(--accent-8)"}}} onClick={on_click_cd52377c93c41b0c569427dc7c014d4b}>
  <NextLink href={`/da5091bf507b`} passHref={true}>
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
</NextLink>
</RadixThemesLink>
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


export default function Component() {

  return (
    <Fragment>
  <Fragment>
  <Div_ac2a89ea84667d600a059f034bd91dfe/>
  <Toaster_89416713a273995fc60191a4cf573054/>
</Fragment>
  <RadixThemesContainer css={{"max-width": "800px", "margin": "20px auto", "padding": "16px", "background-color": "#fff", "border-radius": "8px", "box-shadow": "0 2px 4px rgba(0, 0, 0, 0.1)"}} size={`3`}>
  <RadixThemesText as={`p`} css={{"font-size": "2em", "font-weight": "bold", "color": "#0b082b"}}>
  {`AMD Code Detective🔎`}
</RadixThemesText>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RechartsResponsiveContainer height={300} width={500}>
  <RechartsLineChart data={[{"name": "2017-04-11", "issues introduced": 1, "cumulative": 14}, {"name": "2019-08-02", "issues introduced": 1, "cumulative": 21}, {"name": "2020-01-03", "issues introduced": 1, "cumulative": 17}, {"name": "2024-01-11", "issues introduced": 1, "cumulative": 2}, {"name": "2024-06-07", "issues introduced": 0, "cumulative": 3}]} height={`100%`} width={`100%`}>
  <RechartsLine dataKey={`issues introduced`} stroke={`#8884d8`}/>
  <RechartsLine dataKey={`cumulative`} stroke={`#82ca9d`}/>
  <RechartsXAxis dataKey={`name`}/>
  <RechartsYAxis/>
  <RechartsLegend/>
</RechartsLineChart>
</RechartsResponsiveContainer>
  <div className={`rx-Html`} dangerouslySetInnerHTML={{"__html": "<br>"}}/>
  <RadixThemesText as={`p`}>
  {``}
</RadixThemesText>
  <Link_ce1c17616e5c7f17728c4aed2bdfa904/>
  <Link_3b53a49c5dfc89d8840b3b2fb4c38209/>
  <Link_4302a7ccd464c17b509f622fdf8aa9a4/>
  <Link_64d54379dab2d92aa80ef67f3d47c36b/>
  <Link_3813e15b4ec9d8edd8e530ae629a41bb/>
</RadixThemesContainer>
  <NextHead>
  <title>
  {`Reflextest | Index`}
</title>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
