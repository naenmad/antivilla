"use client";

import { useEffect } from "react";
// Wait, I don't recall installing Sonner. Let's start with a console log & standard behavior modifications.
// The user asked for "custom copy paste text dari web ini juga". This implies modifying the clipboard content.

export function ClipboardCustomizer() {
    useEffect(() => {
        const handleCopy = (e: ClipboardEvent) => {
            const selection = document.getSelection();
            if (!selection) return;

            const selectedText = selection.toString();
            if (!selectedText) return;

            // Prevent default copy behavior
            e.preventDefault();

            // Construct new text with attribution
            const attribution = `\n\nRead more at: ${window.location.href}\nSource: Antivilla - Trusted Villa Rentals in Puncak`;
            const newText = selectedText + attribution;

            // Set the modified text to clipboard
            if (e.clipboardData) {
                e.clipboardData.setData("text/plain", newText);
                // e.clipboardData.setData('text/html', selection.toString() + `<br><br>Read more at: <a href="${window.location.href}">${window.location.href}</a><br>Source: Antivilla`);

                // Optional: Show feedback
                // toast.success("Copied to clipboard with attribution!"); // If toast exists
                console.log("Text copied with attribution added.");
            }
        };

        const handlePaste = (e: ClipboardEvent) => {
            // The user said "custom copy paste text", but usually websites don't customize PASTE unless it's an input field.
            // If they meant "prevent paste" or "format on paste", that's specific.
            // I'll assume they mostly meant the COPY part (modifying what is taken FROM the web).
            // Intercepting global paste is intrusive and usually bad UX unless explicitly requested for a specific input.
            // I will leave paste alone for plain "reading" pages.
        };

        document.addEventListener("copy", handleCopy);

        return () => {
            document.removeEventListener("copy", handleCopy);
        };
    }, []);

    return null; // This component handles side effects only
}
