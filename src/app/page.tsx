import { FadeIn } from "./_components/fade-in";
import Image from "next/image";
import Link from "next/link";

export default function ImpairedDrivingPage() {
  return (
    <main className="bg-background min-h-screen">
      {/* Top Banner / Hero */}
      <div className="relative h-200 w-full overflow-hidden text-white">
        {/* Hero Image */}
        <Image
          src="/Web%20Assets/Hero.png"
          alt="Impaired Driving Hero"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 z-0 h-full w-full object-cover object-top"
        />
        {/* Gradient Overlay for Text Readability - Adjusted to be darker on left */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-0"></div> */}

        <div className="relative z-10 container mx-auto max-w-7xl px-6 pt-42 md:pt-40 md:pb-48">
          <div className="flex max-w-2xl flex-col gap-2">
            {/* FDOT Logo */}
            <FadeIn className="absolute top-8 left-8 z-10" direction="none">
              {/* <Link href="https://www.fdot.gov" target="_blank">
                <Image
                  src="/Web%20Assets/FDOT%20Logo_K.png"
                  alt="FDOT Logo"
                  width={400}
                  height={112}
                  className="h-28 w-auto -ml-3"
                />
              </Link> */}
              <div className="flex items-center pt-8 gap-5">
                <Link href="https://www.fdot.gov" target="_blank">
                  <Image
                    src="/Web%20Assets/FDOT%20Logo_K.png"
                    alt="FDOT Logo"
                    width={400}
                    height={112}
                    className="h-16 w-auto object-contain md:h-20"
                  />
                </Link>
                <Link href="https://www.fdot.gov/agencyresources/target-zero" target="_blank">
                  <Image
                    src="/tz_logo_black.png"
                    alt="FDOT Logo"
                    width={400}
                    height={112}
                    className="h-16 w-auto object-contain md:h-16"
                  />
                </Link>
              </div>
            </FadeIn>
            {/* Title Block with Red Background Effect */}
            <FadeIn className="relative mb-6" direction="none" delayMs={75}>
              {/* Red pill background */}
              <div className="absolute inset-0 -left-[100vw] w-[calc(100vw+100%)] rounded-r-full bg-linear-to-r from-red-700/50 to-red-500/50"></div>

              <h1 className="relative z-10 py-3 pr-8 pl-0 text-4xl leading-tight font-black tracking-tight text-shadow-md md:text-6xl">
                Impaired Driving in Florida
              </h1>
            </FadeIn>

            <FadeIn className="relative mb-6" direction="none" delayMs={175}>
              {/* black gradient background */}
              <div className="absolute -inset-5 -left-[100vw] w-[calc(100vw+90%)] bg-linear-to-r from-[#1c3e6f]/30 to-[#1c3e6f]/30"></div>

              <p className="max-w-xl font-sans text-xl leading-relaxed font-bold text-white drop-shadow-xl text-shadow-lg">
                Impaired driving remains one of the most serious and preventable
                safety issues on Florida’s roadways. Driving under the influence
                of alcoholic beverages, controlled substances, marijuana, or some
                over-the-counter medications can cause impairment and inhibit
                your ability to drive safely.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>

      <div className="w-full space-y-20 -mt-26 md:mt-0">
        {/* Intro Section: Text + Stats */}
        <FadeIn
          as="section"
          className="container mx-auto mt-20 grid max-w-6xl items-start gap-12 px-10 lg:grid-cols-2"
        >
          {/* Left Column: Text */}
          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-slate-700">
              Impairment is not limited to alcohol. Drugs,
              including illegal substances, like marijuana,
              prescription medications, and some over-the-counter products, can also affect
              judgment, coordination, reaction time, and
              decision making. When drivers are impaired,
              the risk of a serious or fatal crash increases for
              everyone on the road. Every safe choice behind
              the wheel helps protect lives and supports
              Florida’s goal of zero transportation-related
              fatalities and serious injuries.
            </p>
          </div>

          {/* Right Column: Stats with Icons */}
          <div className="space-y-4 lg:pl-8">
            <div className="mx-auto w-full max-w-130">
              <div className="flex items-center gap-4">
                <div className="shrink-0">
                  <Image
                    src="/Web%20Assets/Icons-01.png"
                    alt="48 minutes icon"
                    width={64}
                    height={64}
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xl leading-tight">
                    <span className="text-2xl font-extrabold text-red-500">
                      EVERY 48
                    </span>{" "}
                    <span className="w-full font-medium text-[#1c3e6f]">
                      minutes, there is another alcohol-impaired-driving
                      fatality.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mx-auto w-full max-w-130">
              <div className="flex items-center gap-4">
                <div className="shrink-0">
                  <Image
                    src="/Web%20Assets/Icons-02.png"
                    alt="13 seconds icon"
                    width={64}
                    height={64}
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xl leading-tight">
                    <span className="text-2xl font-extrabold text-red-500">
                      EVERY 13
                    </span>{" "}
                    <span className="w-full font-medium text-[#1c3e6f]">
                      seconds another person is injured.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mx-auto w-full max-w-130">
              <div className="flex items-center gap-4">
                <div className="shrink-0">
                  <Image
                    src="/Web%20Assets/Icons-03.png"
                    alt="7 seconds icon"
                    width={64}
                    height={64}
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <div>
                  <p className="text-xl leading-tight">
                    <span className="text-2xl font-extrabold text-red-500">
                      EVERY 7
                    </span>{" "}
                    <span className="w-full font-medium text-[#1c3e6f]">
                      seconds there is another property damage crash.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mx-auto w-full max-w-130">
              <div className="flex items-center gap-4">
                <div className="shrink-0">
                  <Image
                    src="/Web%20Assets/Icons-04.png"
                    alt="7 seconds icon"
                    width={64}
                    height={64}
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <div>
                  <p className="text-xl leading-tight">
                    <span className="text-2xl font-extrabold text-red-500">
                      MARIJUANA IS THE 2ND
                    </span>{" "}
                    <span className="w-full font-medium text-[#1c3e6f]">
                      most common drug linked to substance-impaired driving.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
        {/* Divider Line */}
        <FadeIn
          className="container mx-auto w-full max-w-7xl px-6"
          delayMs={75}
        >
          <Image
            src="/Web%20Assets/Divider%20Line.png"
            alt="Divider"
            width={1600}
            height={112}
            sizes="100vw"
            className="h-28 w-full object-cover"
          />
        </FadeIn>

        {/* Impaired Driving Images Section */}
        <FadeIn as="section" className="bg-gray-200">
          <div className="container mx-auto -mb-20 max-w-7xl space-y-8 bg-gray-200 px-10 py-12">
            <div className="text-center">
              <h2 className="text-5xl font-black tracking-tight text-[#1c3e6f]">
                Impaired Driving
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col items-center">
                <Link
                  href="https://www.youtube.com/watch?v=PblDqyll7uU"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Watch: Don’t Drive High — Reaction Time (YouTube)"
                  className="group relative mb-6 block w-full overflow-hidden rounded-[40px] shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:ring-4 focus-visible:ring-[#1c3e6f]/40 focus-visible:outline-none"
                >
                  <div className="relative aspect-4/3 w-full overflow-hidden">
                    <Image
                      src="/Web%20Assets/Don't%20Drive%20High%20Image.png"
                      alt="Don’t Drive High"
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                    <div
                      className="pointer-events-none absolute inset-0 grid place-items-center"
                      aria-hidden="true"
                    >
                      <div className="grid h-16 w-16 place-items-center rounded-full bg-white/15 ring-1 ring-white/40 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-10 w-10 translate-x-px fill-white"
                        >
                          <path d="M8.5 5.8v12.4c0 .8.9 1.3 1.6.9l9.3-6.2c.6-.4.6-1.4 0-1.8l-9.3-6.2c-.7-.5-1.6.1-1.6.9z" />
                        </svg>
                      </div>
                    </div>
                    {/* <div className="absolute right-5 bottom-5 left-5">
                      <div className="text-left">
                        <p className="text-sm font-semibold tracking-wide text-white/90 uppercase">
                          Watch video
                        </p>
                        <p className="text-xl font-black text-white">
                          Don’t Drive High
                        </p>
                      </div>
                    </div> */}
                  </div>
                </Link>
                <h3 className="text-center text-xl font-black text-[#1c3e6f] uppercase md:text-2xl">
                  Don’t Drive High
                </h3>
              </div>

              <div className="flex flex-col items-center">
                <Link
                  href="https://www.youtube.com/watch?v=3hYXDvJh_CM"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Watch: Drive Sober or Get Pulled Over (YouTube)"
                  className="group relative mb-6 block w-full overflow-hidden rounded-[40px] shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:ring-4 focus-visible:ring-[#1c3e6f]/40 focus-visible:outline-none"
                >
                  <div className="relative aspect-4/3 w-full overflow-hidden">
                    <Image
                      src="/Web%20Assets/Impaired%20Driver%20Image.png"
                      alt="Impaired Driver"
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                    <div
                      className="pointer-events-none absolute inset-0 grid place-items-center"
                      aria-hidden="true"
                    >
                      <div className="grid h-16 w-16 place-items-center rounded-full bg-white/15 ring-1 ring-white/40 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-10 w-10 translate-x-px fill-white"
                        >
                          <path d="M8.5 5.8v12.4c0 .8.9 1.3 1.6.9l9.3-6.2c.6-.4.6-1.4 0-1.8l-9.3-6.2c-.7-.5-1.6.1-1.6.9z" />
                        </svg>
                      </div>
                    </div>
                    {/* <div className="absolute right-5 bottom-5 left-5">
                      <div className="text-left">
                        <p className="text-sm font-semibold tracking-wide text-white/90 uppercase">
                          Watch video
                        </p>
                        <p className="text-xl font-black text-white">
                          Drive Sober
                        </p>
                      </div>
                    </div> */}
                  </div>
                </Link>
                <h3 className="text-center text-xl font-black text-[#1c3e6f] uppercase md:text-2xl">
                  Drive Sober or Get Pulled Over
                </h3>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* FACTS Section */}
        <FadeIn
          as="section"
          className="relative my-12 w-full overflow-hidden p-16 md:py-34"
        >
          {/* Background Image (Road) */}
          <div className="absolute inset-0 z-0 bg-slate-500">
            <Image
              src="/road.jpg"
              alt="Road Background"
              fill
              sizes="100vw"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="relative z-10 container flex gap-2 md:gap-5 max-w-5xl mx-auto bg-white/70 rounded-r-4xl overflow-hidden">
            <div className="relative w-1/5 items-start overflow-hidden">
              <Image
                src="/Web%20Assets/Facts.png"
                alt="FACTS"
                fill
                sizes="24vw"
                className="object-contain object-top-left scale-105"
              />
            </div>
            <div className="z-10 w-4/5 p-6 md:p-10">
              <div className="flex grow items-center">
                <ul className="space-y-5 text-xl leading-snug font-medium text-black md:text-2xl">
                  <li className="flex items-start gap-4">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1c3e6f] text-black"></span>
                    <span>
                      In 2022, 29% of Florida traffic fatalities involved
                      impaired drivers.
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1c3e6f] text-black"></span>
                    <span>
                      Alcohol and drugs, which include illegal substances, marijuana, prescription medications, and some over-the-counter products, can cause impairment.
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1c3e6f] text-black"></span>
                    <span>
                      Every 48 minutes, there is another
                      alcohol-impaired-driving fatality.
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1c3e6f] text-black"></span>
                    <span>
                      Every 13 seconds, another person is injured due to
                      impaired driving.
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1c3e6f] text-black"></span>
                    <span>
                      Every 7 seconds, there is another property damage crash.
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1c3e6f] text-black"></span>
                    <span>
                      Your driver&apos;s license could be suspended for up to 2
                      years if convicted of a DUI.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Engineering & Enforcement Section */}
        <FadeIn
          as="section"
          className="container mx-auto max-w-7xl space-y-16 px-10 py-12"
        >
          {/* Divider Line */}
          <div className="w-full">
            <Image
              src="/Web%20Assets/Divider%20Line.png"
              alt="Divider"
              width={1600}
              height={112}
              sizes="100vw"
              className="h-28 w-full object-cover"
            />
          </div>

          <div className="grid gap-12 px-3 md:grid-cols-2 lg:gap-24">
            <div className="space-y-6">
              <div className="flex h-18 flex-col items-center justify-center">
                <h2 className="text-center text-4xl leading-tight font-black tracking-tight text-[#1e3a8a]">
                  Engineering for Safety
                </h2>
              </div>
              <p className="text-center text-xl leading-relaxed text-slate-700">
                Engineering and safe road design plays a significant part in
                helping reduce the risk and severity of impaired driving
                crashes. The Florida Department of Transportation’s engineering
                strategies focus on creating safer systems that account for
                human error. Clearly posted speed limits, improved signage,
                enhanced lighting, and roadway features such as reduced speed
                zones all help drivers make safer decisions. These tactics are
                important in areas with changing trac patterns, varied weather
                conditions, or limited visibility
              </p>
              <p className="text-center text-xl leading-relaxed text-slate-700">
                Additional engineering solutions, such as wrong way driving
                detection systems, help identify dangerous situations early and
                reduce crashes. These methods support the Safe by DESIGN
                principle by reducing opportunities for severe outcomes when
                driver impairment or error occurs.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-center text-4xl leading-tight font-bold text-[#1e3a8a]">
                  Enforcement and High
                  <br className="hidden md:block" /> Visibility Efforts
                </h3>
              </div>
              <p className="text-center text-xl leading-relaxed text-slate-700 pl-5 md:pl-0">
                Enforcement is a key component of impaired driving prevention.
                Law enforcement agencies across Florida use high visibility
                enforcement strategies to deter impaired driving and remove
                dangerous drivers from the road. These efforts include increased
                patrols, sobriety checks where permitted and coordinated
                enforcement waves.
              </p>
              <p className="text-center text-xl leading-relaxed text-slate-700 pl-5 md:pl-0">
                High visibility enforcement works alongside education and
                engineering to reinforce safe behavior.<br /> Drivers are reminded
                that impaired driving has real consequences and that Florida’s
                roads are actively monitored to protect everyone who uses them.
                Reporting suspected impaired or aggressive driving also plays<br /> an
                important role.
              </p>
            </div>
          </div>

          {/* Red Call to Action */}
          <div className="container mx-auto mb-8 px-6 text-center">
            <h3 className="scale-y-150 transform text-2xl tracking-wide scale-x-120 font-black text-[#d32f2f] uppercase md:text-3xl">
              IF YOU SEE A DANGEROUS DRIVER, CALL *FHP (*347) OR 911 IN ANEMERGENCY.
            </h3>
          </div>

          {/* Data Driven Education */}
          <div className="container mx-auto mb-16 mt-16 flex max-w-5xl flex-col items-center gap-10 px-6 md:flex-row">
            <div className="mx-auto shrink-0 md:mx-0">
              <Image
                src="/Web%20Assets/Drive_Sober_300CMYK.jpg"
                alt="Drive Sober or Get Pulled Over"
                width={208}
                height={208}
                className="h-auto w-52"
              />
            </div>
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-3xl font-bold tracking-tight text-[#1e3a8a]">
                Data-Driven Education
              </h3>
              <p className="text-xl leading-snug text-slate-800">
                Drive Sober Florida is a resource for everyone who uses
                Florida’s roadways. Supported by a data-driven research approach
                to develop and provide impaired driving information and
                education, safety strategies, impaired driving data, and more.
                For additional information, visit{" "}
                <Link
                  href="https://DriveSoberFL.com"
                  target="_blank"
                  className="text-slate-800 underline decoration-1 underline-offset-2 hover:text-[#1e3a8a]"
                >
                  DriveSoberFL.com
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Am I Okay To Drive Section */}
          <div className="mx-auto mb-12 w-full max-w-[95%] rounded-4xl md:rounded-full bg-[#1c3e6f] px-6 py-16 text-center text-white shadow-xl">
            <h2 className="mb-6 text-2xl leading-none font-black tracking-tight uppercase md:text-5xl">
              “AM I OKAY TO DRIVE?”
            </h2>
            <p className="mb-2 text-xl font-light tracking-wide uppercase md:text-2xl scale-y-150">
              IF YOU HAVE CONSUMED ANY ALCOHOL OR DRUGS, THE ANSWER IS NO.
            </p>
            <p className="text-xl leading-tight font-light tracking-wide uppercase md:text-2xl scale-y-150">
              REMEMBER, A PERSON’S JUDGEMENT IS THE FIRST THING AFFECTED BY
              IMPAIRMENT.
            </p>
          </div>

          {/* Safety Footer Text */}
          <div className="container mx-auto max-w-6xl space-y-6 px-6 text-center text-xl font-medium text-slate-800">
            <p>
              Safety remains a top priority for the Florida Department of
              Transportation. We encourage drivers to make the responsible
              choice every time they get behind the wheel: Drive Sober.
            </p>
            <p>
              Start the conversation in your community today - encourage family
              and friends to be safe and accountable on the road by driving
              sober.
            </p>
            <p className="pt-4">
              Let’s get everyone home safely!
            </p>
          </div>
          {/* Divider Line */}
          <div className="container w-full">
            <Image
              src="/Web%20Assets/Divider%20Line.png"
              alt="Divider"
              width={1600}
              height={112}
              sizes="100vw"
              className="h-28 w-full object-cover"
            />
          </div>
        </FadeIn>

        {/* Awareness & Prevention Section */}
        <FadeIn
          as="section"
          className="container mx-auto mb-16 grid max-w-7xl gap-12 px-10 md:grid-cols-2 lg:gap-20"
        >
          <div className="space-y-6">
            <h3 className="text-3xl leading-tight font-bold text-[#1c3e6f]">
              Awareness Matters
            </h3>
            <p className="ml-3 text-xl leading-relaxed text-slate-700">
              The data tells a powerful story. Florida’s Strategic Highway
              Safety Plan shows that one in four traffic fatalities involves a
              driver impaired by alcohol or drugs. National Highway Traffic
              Safety Administration (NHTSA) data underscores the severity of
              this issue, with December 2022, ranking among the highest months
              for drunk-driving deaths in the past 15 years.
            </p>
            <p className="ml-3 text-xl leading-relaxed text-slate-700">
              Drug-impaired driving is equally dangerous and illegal in all 50
              states. A recent national study found that approximately one in
              four seriously injured drivers had active THC, the primary
              ingredient in marijuana, in their system.
            </p>
            <p className="ml-3 text-xl leading-relaxed font-medium text-slate-700">
              These crashes are not accidents. They are preventable.
            </p>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl leading-tight font-bold text-[#1c3e6f]">
                Substances that cause impairment can include:
              </h3>
              <ul className="ml-3 list-disc space-y-2 pl-5 text-xl text-slate-700">
                <li>Alcohol</li>
                <li>Prescription drugs</li>
                <li>Over-the-counter medications</li>
                <li>Illegal drugs, including marijuana</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl leading-tight font-bold text-[#1c3e6f]">
                Plan ahead and choose safe alternatives:
              </h3>
              <ul className="ml-3 list-disc space-y-2 pl-5 text-xl leading-relaxed text-slate-700">
                <li>Plan for a sober ride before heading out.</li>
                <li>Only drive if you are sober.</li>
                <li>
                  If you’re hosting a gathering, never let someone drive
                  impaired. Help them secure a safe, sober ride home.
                </li>
                <li>
                  <Link href="https://www.acg.aaa.com/drivers-safety/tow-to-go.html" target="_blank" className="font-semibold underline font-nunito-sans">Tow to Go</Link>:
                  During the holiday season, AAA offers their free Tow to Go
                  program throughout Florida! Tow to Go provides a free and
                  confidential ride for impaired drivers and their vehicles who
                  do not have a safe alternative, within 10 miles. To arrange a
                  Tow to Go, call <a href="tel:8552869246" className="underline decoration-1 underline-offset-4 hover:text-blue-200">(855) 2-TOW-2-GO (855-286-9246)</a>.
                </li>
                <li>
                  If you see a suspected impaired driver, call *FHP (*347). For
                  emergencies, dial 911.
                </li>
              </ul>
            </div>
          </div>
        </FadeIn>

        {/* Footer Area */}
        <FadeIn
          as="footer"
          className="mt-12 w-full bg-[#1c3e6f] py-12 text-white"
        >
          <div className="container mx-auto space-y-8 px-6 text-center">
            {/* Title */}
            <h3 className="text-4xl font-medium tracking-tight text-blue-100 font-oswald">
              Additional Resources
            </h3>

            {/* Links */}
            <div className="mx-auto font-oswald tracking-wide flex max-w-7xl flex-wrap items-center justify-center gap-x-2 gap-y-2 text-xl leading-relaxed font-medium md:text-2xl">
              <Link
                href="https://www.flhsmv.gov/safety-center/driving-safety/impaired-driving/"
                target="_blank"
                className="underline decoration-1 underline-offset-4 hover:text-blue-200"
              >
                FLHSMV Impaired Driving Campaign
              </Link>
              <span className="px-1 text-white">|</span>
              <Link
                href="https://www.fdot.gov/Safety/programs/impaired-driving.shtm"
                target="_blank"
                className="underline decoration-1 underline-offset-4 hover:text-blue-200"
              >
                Safety Office Impaired Driving Resources
              </Link>
              <span className="px-1 text-white">|</span>
              <Link
                href="https://flimpaireddriving.com/index.html"
                target="_blank"
                className="underline decoration-1 underline-offset-4 hover:text-blue-200"
              >
                Florida Impaired Driving Coalition
              </Link>

              <Link
                href="https://www.nhtsa.gov/campaign/drive-sober-or-get-pulled-over"
                target="_blank"
                className="underline decoration-1 underline-offset-4 hover:text-blue-200"
              >
                National Highway Traffic Safety Administration: Drive Sober or
                Get Pulled Over
              </Link>


              <span className="px-1 text-white">|</span>
              <Link
                href="https://DriveSoberFL.com"
                target="_blank"
                className="underline decoration-1 underline-offset-4 hover:text-blue-200"
              >
                Drive Sober Florida
              </Link>
            </div>

            {/* FDOT Logo */}
            <div className="flex justify-center pt-8 gap-5">
              <Link href="https://www.fdot.gov" target="_blank">
                <Image
                  src="/Web%20Assets/FDOT%20Logo_KO.png"
                  alt="FDOT Logo"
                  width={400}
                  height={112}
                  className="h-16 w-auto object-contain md:h-20"
                />
              </Link>
              <Link href="https://www.fdot.gov/agencyresources/target-zero" target="_blank">
                <Image
                  src="/Web Assets/tz_logo.png"
                  alt="FDOT Logo"
                  width={400}
                  height={112}
                  className="h-16 w-auto object-contain md:h-20"
                />
              </Link>
            </div>
            <div>Copyright © 2026. All rights reserved.</div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
