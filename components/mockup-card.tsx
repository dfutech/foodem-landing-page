import Image from "next/image"

interface MockupCardProps {
    src: string
    alt: string
    index: number
    title: string
    description: string
}

export function MockupCard({ src, alt, index, title, description }: MockupCardProps) {
    return (
        <div className="w-full h-full">
            <div className="bg-white rounded-3xl p-4 h-full flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 border border-slate-100">
                <div className="relative w-full aspect-[9/19] mb-2 overflow-hidden">
                    <Image
                        src={src || "/placeholder.svg"}
                        alt={alt}
                        fill
                        className="object-cover scale-140"
                        priority={index < 2}
                    />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    )
}
