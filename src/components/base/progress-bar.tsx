"use client"

import { AppProgressBar } from "next-nprogress-bar";

export default function ProgressBar() {

    return (
        <AppProgressBar
            height="3px"
            color="#A259FF"
            options={{ showSpinner: false }}
            shallowRouting
        />
    )
}