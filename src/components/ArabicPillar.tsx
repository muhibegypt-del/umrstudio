"use client";
import Image from "next/image";

export default function ArabicPillar() {
    return (
        <div className="fixed right-0 top-0 h-full w-[80px] md:w-[120px] z-40 flex flex-col items-center justify-center pointer-events-none mix-blend-multiply opacity-90">
            {/* The Image is already Black on White/Transparent, so mix-blend-multiply works perfectly if standard. 
                If the image is White on Black, we might need inversion or mix-blend-difference. 
                Assuming standard calligraphy is often dark. But user's kanji was white on black. 
                Let's assume this one might be similar. If so, apply invert. 
                Let's tentatively apply invert(1) if it's white-on-black, or none if black-on-white.
                User image 1770151082322.png looks like Black Ink on White from the preview? 
                Actually the preview shows Black Ink on White.
            */}
            <div className="relative w-full h-[65vh]">
                <Image
                    src="/images/arabic-pillar.png"
                    alt="Arabic Calligraphy Pillar"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </div>
    );
}
