
import React from 'react';
import { Button } from '@/components/ui/button';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { Link } from 'react-router-dom';
import { Waves } from '@/components/ui/waves-background';

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
};

export const HeroContent = () => {
    return (
        <section>
            <div className="relative pt-24 md:pt-36">
                <AnimatedGroup
                    variants={{
                        container: {
                            visible: {
                                transition: {
                                    delayChildren: 1,
                                },
                            },
                        },
                        item: {
                            hidden: {
                                opacity: 0,
                                y: 20,
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    type: 'spring',
                                    bounce: 0.3,
                                    duration: 2,
                                },
                            },
                        },
                    }}
                    className="absolute inset-0 -z-20">
                    <div className="absolute inset-0">
                        <Waves 
                            lineColor="rgba(255, 255, 255, 0.2)" 
                            backgroundColor="transparent"
                            waveSpeedX={0.015}
                            waveSpeedY={0.01}
                            waveAmpX={40}
                            waveAmpY={20}
                            friction={0.9}
                            tension={0.008}
                            maxCursorMove={120}
                            xGap={14}
                            yGap={40}
                        />
                    </div>
                </AnimatedGroup>
                <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                        <AnimatedGroup variants={transitionVariants}>
                            <h1
                                className="mt-8 max-w-4xl mx-auto text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                                Empowering Customer Connections, One Experience at a Time
                            </h1>
                            <p
                                className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                                Designing intuitive interfaces that transform your ideas into engaging digital experiences — just the way you envision.
                            </p>
                        </AnimatedGroup>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}
                            className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                            <div
                                key={1}
                                className="bg-foreground/10 rounded-[14px] border p-0.5">
                                <Button
                                    asChild
                                    size="lg"
                                    className="rounded-xl px-5 text-base">
                                    <Link to="#link">
                                        <span className="text-nowrap">See Portfolio</span>
                                    </Link>
                                </Button>
                            </div>
                            <div
                                key={2}
                                className="bg-foreground/10 rounded-[14px] border p-0.5">
                                <Button
                                    asChild
                                    size="lg"
                                    variant="ghost"
                                    className="rounded-xl px-5 text-base">
                                    <Link to="#link">
                                        <span className="text-nowrap">Go to my CV</span>
                                    </Link>
                                </Button>
                            </div>
                        </AnimatedGroup>
                    </div>
                </div>

                <AnimatedGroup
                    variants={{
                        container: {
                            visible: {
                                transition: {
                                    staggerChildren: 0.05,
                                    delayChildren: 0.75,
                                },
                            },
                        },
                        ...transitionVariants,
                    }}>
                    <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                        <div
                            aria-hidden
                            className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                        />
                        <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                            <img
                                className="bg-background aspect-15/8 relative rounded-2xl block"
                                src="https://tailark.com//_next/image?url=%2Fmail2.png&w=3840&q=75"
                                alt="app screen"
                                width="2700"
                                height="1440"
                            />
                        </div>
                    </div>
                </AnimatedGroup>
            </div>
        </section>
    )
}
