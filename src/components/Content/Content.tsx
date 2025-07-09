import React, { useState, useRef, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import type { ComponentType } from 'react';
import StateSelection from '../StateSelection/StateSelection';

const OfferSelection = dynamic<{
  isStateSupported: boolean | null;
  onResetSelection?: () => void;
  handleGoBack?: () => void;
}>(
  () => import('../OfferSelection/OfferSelection'), 
  { ssr: false }
) as ComponentType<{
  isStateSupported: boolean | null;
  onResetSelection?: () => void;
  handleGoBack?: () => void;
}>;

const VidalyticsVideo = dynamic(() => import('../VidalyticsVideo/VidalyticsVideo'), {
  ssr: false,
});

const YotpoReview = dynamic(() => import('../Yotpo/YotpoReview').then(mod => mod.default), {
  ssr: false,
});

interface ContentProps {
  buttonText?: string;
}

const UNSUPPORTED_STATES: string[] = [
  'AK',
  'HI',
  'MA',
  'NJ',
  'NY',
  'OR',
  'AL',
  'AR',
  'ME',
  'MD',
  'MT',
  'NE',
  'NV',
  'RI',
  'TN',
  'VT',
  'WI',
  'CT',
  'WA',
  'FL',
  'GA',
  'AZ',
  'MI',
  'VA',
];

const Content: React.FC<ContentProps> = ({ buttonText }) => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const stateSelectionRef = useRef<{ resetSelection: () => void }>(null);
  
  const handleResetSelection = useCallback(() => {
    setSelectedState('');
    stateSelectionRef.current?.resetSelection();
  }, []);
  const searchParams = useSearchParams();

  // Get all current URL parameters
  const getCheckoutUrl = (baseUrl: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const queryString = params.toString();
    return `${baseUrl}${queryString ? `?${queryString}` : ''}`;
  };

  return (
    <div className="min-h-screen bg-[url('/bg.webp')] bg-cover bg-fixed bg-repeat bg-center">
      <div className="w-full max-w-[1200px] mx-auto px-5 py-4 lg:px-20 bg-white">
        <div className="space-y-8">
          <header className="text-center py-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal leading-snug md:leading-tight mb-4 px-2 italic">
              Attention Gun Owners:{' '}
              <span className="font-bold">
                "You DON'T Have to Be a Criminal to Get Thrown In Jail"
              </span>
            </h1>
            <span className="text-xl md:text-2xl font-semibold text-red-600 px-4 pt-1 pb-0 inline-block italic">
              <span className="bg-[#ff0] px-1 py-1 italic">
                See Where You’re Exposed and How to Protect Yourself And Your Family
              </span>
            </span>
          </header>

          <div className="w-full max-w-4xl mx-auto -mt-4">
            <VidalyticsVideo />
          </div>
          <StateSelection 
            onStateSelect={setSelectedState}
            ref={stateSelectionRef}
          />
          <OfferSelection
            isStateSupported={!selectedState ? null : !UNSUPPORTED_STATES.includes(selectedState)}
            onResetSelection={handleResetSelection}
            handleGoBack={handleResetSelection}
          />
          <p className="text-lg md:text-[22px] leading-normal !mt-4 md:!mt-5">
            Hey there I’m Adam Lantelme, the founder of VNSH.
          </p>
          <p className="text-lg md:text-[22px] leading-normal !mt-4 md:!mt-5">
            I’ve got a really important message for you if you own a firearm and have ever
            considered using it for self defense.
          </p>
          <p className="text-lg md:text-[22px] leading-normal !mt-4 md:!mt-5">
            Doesn’t matter if you conceal carry or not, what I’m about to show you affects you and
            the people you love.
          </p>
          <p className="text-lg md:text-[22px] leading-normal !mt-4 md:!mt-5">
            Sadly, even if you ever use your gun for self defense and do everything right when the
            time comes to deploy your weapon to stay alive…
          </p>
          <p className="text-lg md:text-[22px] leading-normal !mt-4 md:!mt-5">
            Your life may still be in serious danger..
          </p>
          <header className="text-center py-1 px-4 md:py-6 md:px-6 lg:px-15">
            <span className="text-xl md:text-4xl font-bold leading-normal md:leading-[1.4] text-orange-500">
              This Shocking Thing Happens to Law-Abiding Gun Owners All The Time
            </span>
          </header>
          <p className="text-lg md:text-[22px] leading-normal !mt-4 md:!mt-5">
            Here’s what I mean.
          </p>
          <p className="text-lg md:text-[22px] leading-normal !mt-4 md:!mt-5">
            As unfair as it may seem…
          </p>
          <p className="text-lg md:text-[22px] leading-normal !mt-4 md:!mt-5">
            If you end up shooting someone in defense of yourself or another, even if you were fully
            justified…
          </p>
          <p className="text-lg md:text-[22px] leading-normal !mt-4 md:!mt-5">
            The state will force you to appear in court to prove you were the good guy… plus you’ll
            face the very real possibility of a civil suit from the family of whoever you shot.
          </p>
          <p className="text-lg md:text-[22px] leading-normal !mt-4 md:!mt-5">
            And the cost of proving your innocence can be{' '}
            <span className="font-bold">devastating.</span>
          </p>
          <p className="text-lg md:text-[22px] leading-normal !mt-4 md:!mt-5">
            The average amount someone pays to clear their name after a self-defense shooting is
            $40,000, but it can easily reach into the 100’s of thousands.
          </p>
          <p className="text-lg md:text-[22px] leading-normal !mt-4 md:!mt-5">
            I don’t know about you, but if I was hit with a $40,000 bill I’d be wiped out!
          </p>
          <p className="text-lg md:text-[22px] leading-normal !mt-4 md:!mt-5">
            Just like Stephen Maddox was.
          </p>
          <header className="text-center py-1 px-4 md:py-6 md:px-6 lg:px-15">
            <span className="text-xl md:text-4xl font-bold leading-normal md:leading-[1.4] text-orange-500">
              The Mistake This Gun Owner Made Ended Cost Him a Fortune - And Almost Sent Him to
              Prison For Life!
            </span>
          </header>
          <p className="text-lg md:text-[22px] leading-normal !mt-4 md:!mt-5">
            While it’s hard to say for sure, there’s a good chance that at some point in the past
            Stephen came across a program like the one I’m about to show you… that he decided NOT to
            get.
          </p>
          <p className="text-lg md:text-[22px] leading-normal !mt-4 md:!mt-5">
            Back in 2015, Stephen found himself in a situation where his life was at risk.
          </p>
          <p className="text-lg md:text-[22px] leading-normal !mt-4 md:!mt-5">
            Acting in self-defense, he used his firearm to escape.
          </p>
          <p className="text-lg md:text-[22px] leading-normal !mt-4 md:!mt-5">
            After the shooting Stephen expected that since he’d used his gun in a justified act of
            self defense he’d go home to his family.
          </p>
          <p className="text-lg md:text-[22px] leading-normal !mt-4 md:!mt-5">
            Yet he was handcuffed and put into a squad car and dragged off to the police station.
          </p>
          <p className="text-lg md:text-[22px] leading-normal !mt-4 md:!mt-5">
            When he arrived at the police station...and with a witness telling the police exactly
            what happened…
          </p>
          <p className="text-lg md:text-[22px] leading-normal !mt-4 md:!mt-5">
            Stephen wasn’t released…
          </p>
          <p className="text-lg md:text-[22px] leading-normal !mt-4 md:!mt-5">
            He was charged with first-degree murder!
          </p>
          <p className="text-lg md:text-[22px] leading-normal !mt-4 md:!mt-5">
            The police locked him up and threw him into jail with the most violent criminals...
          </p>
          <p className="text-lg md:text-[22px] leading-normal !mt-4 md:!mt-5">
            Stephen was a patriotic American who used his gun for the right reason... He was trained
            and ready. He did everything by the book.
          </p>
          <p className="text-lg md:text-[22px] leading-normal !mt-4 md:!mt-5">
            Yet here he was, locked up with real criminals for a crime he didn't commit!
          </p>
          <p className="text-lg md:text-[22px] leading-normal !mt-4 md:!mt-5">
            Despite being found not guilty in the end, he still had to fight for his life in a
            years-long legal battle, which cost upwards of $300,000.
          </p>
          <div className="w-full max-w-7xl mx-auto space-y-8">
            <div className="mx-auto w-full md:max-w-[70%]">
              <Image
                src="/contentimages/guaranteed_banner.webp"
                alt="VNSH Holster deal"
                className="w-full h-auto"
                width={1120}
                height={600}
                priority
              />
            </div>
            <p className="text-lg md:text-2xl leading-normal">
              The reason for it’s insane comfort? The materials. We combined the rugged{' '}
              <span className="font-bold">1000D Cordura</span> with a stretchy{' '}
              <span className="font-bold">'yoga pant'</span> fabric that is not only built to last
              for years, but also feels like silk boxers on your skin.
            </p>
            <p className="text-lg md:text-2xl leading-normal">
              Even better, these sweat-wicking materials do <span className="underline">NOT</span>{' '}
              retain sweat or odor, so you can{' '}
              <span className="font-bold">carry comfortably all day</span> without getting sticky or
              slimy.
            </p>
            <p className="text-lg md:text-2xl leading-normal">
              You can wear this holster with <span className="font-bold underline">ANY</span>{' '}
              clothing. That’s because our specially designed, built in waistband simply goes around
              your torso like a belt, and doesn’t need hooks, clips, or a tactical belt to wear.
            </p>
            <p className="text-lg md:text-2xl leading-normal">
              This means you can wear this holster with a business suit, sweat suit,{' '}
              <span className="italic">or swim suit… or even just your birthday suit</span>.
            </p>
            <p className="text-lg md:text-2xl leading-normal">
              But where it really excels{' '}
              <span className="font-bold italic">
                (and where most other holsters fail miserably)
              </span>{' '}
              is that it helps you carry anywhere while having the ability to carry 2 additional
              mags.
            </p>
            <p className="text-lg md:text-2xl leading-normal">
              Perhaps the best thing of all is this holster will fit 99% of all brands, types, and
              styles of semi autos.
            </p>
            <p className="text-lg md:text-2xl leading-normal">
              And our unique design ensures your concealed carry device{' '}
              <span className="font-bold">“Vanishes”</span> against your body, making it virtually
              invisible to others.
            </p>
            <p className="text-lg md:text-2xl leading-normal">
              It’s why we named it the <span className="font-bold underline">VNSH Holster</span>!
            </p>
            <p className="text-lg md:text-2xl leading-normal">
              How many other holsters can do all that?{' '}
              <span className="font-bold">The answer is ZERO.</span>
            </p>
            <div className="mx-auto w-full md:max-w-[70%]">
              <Image
                src="/contentimages/BlackHolsterDesktop3.webp"
                alt="VNSH Holster deal"
                className="w-full h-auto"
                width={1120}
                height={600}
                priority
              />
            </div>
            <p className="text-lg md:text-2xl leading-normal">
              Now it’s obvious we’d be saying this. But take a look at what some of our thousands
              upon thousands of customers say about our holster.
            </p>
            <div className="my-8 w-full">
              <YotpoReview />
            </div>
            <div className="text-center my-8 md:my-10">
              <a
                href={getCheckoutUrl('https://secure.vnsh.com/vns3qdbonus/checkout')}
                className="inline-block"
              >
                <button className="bg-[#28a745] hover:bg-[#218838] text-white font-bold py-4 px-8 text-xl md:py-3 md:px-10 md:text-3xl transition-all duration-300 animate-custom-pulse hover:opacity-100 hover:scale-105 transform">
                  {buttonText}
                </button>
              </a>
            </div>
            <div className="text-center my-8">
              <p className="text-xl md:text-1xl font-semibold leading-normal md:leading-tight text-red-600">
                <span className="bg-[#ff0] px-2 py-1">
                  60 Days to Try It Yourself… Love It Or You Don't Pay a Dime!
                </span>
              </p>
            </div>
            <hr className="my-8 border-t border-gray-200" />
            <header className="text-center py-1">
              <span className="text-[25px] md:text-[36px] font-bold leading-tight md:leading-[1.2] text-[#f16500]">
                Seriously, This Holster Works With 99.9% of Semi-Automatic Pistols On the Planet
              </span>
            </header>
            <div className="mx-auto w-full md:max-w-[70%]">
              <Image
                src="/contentimages/BlackHolster1.webp"
                alt="VNSH Holster deal"
                className="w-full h-auto"
                width={1120}
                height={600}
                priority
              />
            </div>
            <p className="text-lg md:text-2xl leading-normal">
              Our holster design means that{' '}
              <span className="font-bold">regardless of what pistol you own…</span> it will help you
              safely and comfortably carry it.
            </p>
            <p className="text-lg md:text-2xl leading-normal">
              No more needing to buy multiple holsters for all your pistols.
            </p>
            <p className="text-lg md:text-2xl leading-normal">
              Plus, since it has 2-built in mag pouches, now{' '}
              <span className="font-bold">you don’t need to spend extra money on mag pouches</span>{' '}
              to guarantee you’re never out of the fight.
            </p>
            <p className="text-lg md:text-2xl leading-normal">
              Take a look at the list of brands our holster works with and then grab yours before
              the price goes up!
            </p>
            <div className="w-full my-8 px-4">
              {/* Desktop Image */}
              <div className="hidden md:block w-full">
                <div className="mx-auto w-[90%] max-w-[1400px]">
                  <Image
                    src="/contentimages/LogoDesktop1.webp"
                    alt="Logo"
                    width={1400}
                    height={1000}
                    className="w-full h-auto rounded-lg"
                    priority
                  />
                </div>
              </div>
              {/* Mobile Image */}
              <div className="block md:hidden">
                <Image
                  src="/contentimages/LogoMobile2.webp"
                  alt="Logo mobile"
                  width={500}
                  height={800}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>
            </div>
            <div className="text-center my-8 md:my-10">
              <a
                href={getCheckoutUrl('https://secure.vnsh.com/vns3qdbonus/checkout')}
                className="inline-block"
              >
                <button className="bg-[#28a745] hover:bg-[#218838] text-white font-bold py-4 px-8 text-xl md:py-3 md:px-10 md:text-3xl transition-all duration-300 animate-custom-pulse hover:opacity-100 hover:scale-105 transform">
                  {buttonText}
                </button>
              </a>
            </div>
            <div className="text-center my-8">
              <p className="text-xl md:text-1xl font-semibold leading-normal md:leading-tight text-red-600">
                <span className="bg-[#ff0] px-2 py-1">
                  60 Days to Try It Yourself… Love It Or You Don't Pay a Dime!
                </span>
              </p>
            </div>
            <hr className="my-8 border-t border-gray-200" />
            <header className="text-center py-1">
              <span className="text-[25px] md:text-[36px] font-bold leading-tight md:leading-[1.2] text-[#f16500]">
                Don’t Let An Uncomfortable Holster Be The Reason You’re Unarmed When Bad Guys Attack
              </span>
            </header>
            <p className="text-lg md:text-2xl leading-normal">
              The vast majority of gun owners don’t carry their gun daily for 1 simple reason.
            </p>
            <p className="text-lg md:text-2xl leading-normal">
              They don’t like how their holster feels.
            </p>
            <p className="text-lg md:text-2xl leading-normal">
              The good news is that the VNSH Holster is made for all day wear… and owning{' '}
              <span className="font-bold">
                it is the #1 thing you can do to ensure you're always ready to defend yourself
              </span>{' '}
              and your family.
            </p>
            <p className="text-lg md:text-2xl leading-normal">
              The VNSH holster is <span className="font-bold">superior</span> to leather and kydex.
            </p>
            <p className="text-lg md:text-2xl leading-normal">
              Where kydex can be rigid and uncomfortable… and leather is sweaty and sticky, the VNSH
              holster is ultra-comfortable because it uses a custom blend of sweat-wicking fabrics
              that we call "yoga pant" fabric to help you stay cool and dry in the nastiest
              environments.
            </p>
            <p className="text-lg md:text-2xl leading-normal">
              Not to mention the waist band is made from a crazy comfy velcro{' '}
              <span className="font-bold">that will</span> not snag on shirts, waistbands and the
              like.
            </p>
            <p className="text-lg md:text-2xl leading-normal">
              And because of its unique no-clip, no hook design,{' '}
              <span className="font-bold">
                you can comfortably configure the holster any which way you want.
              </span>
            </p>
            <p className="text-lg md:text-2xl leading-normal">
              Want to carry at 3 o’clock? Go for it.
            </p>
            <p className="text-lg md:text-2xl leading-normal">
              Like pure appendix carry? That’s easy.
            </p>
            <p className="text-lg md:text-2xl leading-normal">
              Does carrying in the small of your back suit you best? Well, it works there too.
            </p>
            <p className="text-lg md:text-2xl leading-normal">
              You can even carry it up high on your chest or side thanks to the adjustable strap
              (which extends up to 48 inches and 68 inches with our extension strap).
            </p>
            <p className="text-lg md:text-2xl leading-normal">
              Also, we combined that awesome "yoga pant" fabric with rugged 1000D Cordura so it will
              withstand years and years of abuse without showing a sign of distress.
            </p>
            <p className="text-lg md:text-2xl leading-normal">
              And best of all it features an{' '}
              <span className="font-bold">enhanced trigger guard.</span> Yes, it’s true, the VNSH
              holster is the only bellyband on the planet with a dedicated trigger guard built in. A
              solid but flexible piece of .7mm plastic resits in the custom-built holster to prevent{' '}
              <span className="font-bold">anything</span> from accidentally causing a negligent
              discharge.
            </p>
            <p className="text-lg md:text-2xl leading-normal">
              Not to mention the retention is rock-solid…{' '}
              <span className="font-bold">but still incredibly easy to draw.</span> Never fear that
              your gun will fall out, or that a criminal will be able to disarm you.
            </p>
            <div className="w-full md:w-[60%] mx-auto max-w-[1120px] px-4 md:px-0">
              <Image
                src="/contentimages/BlackHolsterDesktop2.webp"
                alt="VNSH Holster deal"
                className="w-full h-auto"
                width={1120}
                height={600}
                priority
              />
            </div>
            <div className="text-center my-8 md:my-10">
              <a
                href={getCheckoutUrl('https://secure.vnsh.com/vns3qdbonus/checkout')}
                className="inline-block"
              >
                <button className="bg-[#28a745] hover:bg-[#218838] text-white font-bold py-4 px-8 text-xl md:py-3 md:px-10 md:text-3xl transition-all duration-300 animate-custom-pulse hover:opacity-100 hover:scale-105 transform">
                  {buttonText}
                </button>
              </a>
            </div>
            <div className="text-center my-8">
              <p className="text-xl md:text-1xl font-semibold leading-normal md:leading-tight text-red-600">
                <span className="bg-[#ff0] px-2 py-1">
                  60 Days to Try It Yourself… Love It Or You Don't Pay a Dime!
                </span>
              </p>
            </div>
            <header className="text-center py-1">
              <div className="text-[25px] md:text-[36px] font-bold leading-tight md:leading-[1.0] text-[rgb(255,0,0)]">
                <div>$39 BONUS GIFT!</div>
                <div className="my-0 md:my-2">
                  <span className="text-[#f16500]">Get a </span>
                  QuickDraw Gun Magnet 100% FREE
                </div>
                <span className="text-[#f16500]">With Your Purchase Today</span>
              </div>
            </header>
            <div className="w-full md:w-[50%] mx-auto max-w-[1120px] px-4 md:px-0">
              <Image
                src="/contentimages/FREE_SGM.webp"
                alt="VNSH Holster deal"
                className="w-full h-auto"
                width={1120}
                height={600}
                priority
              />
            </div>
            <p className="text-xl md:text-2xl leading-tight">
              Our goal today is to give you a <span className="font-bold">massive deal</span> to
              ensure you’re{' '}
              <span className="underline">
                always prepared to defend your life when it matters most.
              </span>
            </p>
            <p className="text-xl md:text-2xl leading-tight">
              That’s why we’re going to make it a{' '}
              <span className="font-bold italic">total no-brainer</span> to order right now, by
              giving you an <span className="font-bold underline">awesome and FREE gift!</span>
            </p>
            <div>
              <ul className="space-y-6 mb-6 text-xl md:text-2xl leading-tight">
                <li className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1">
                    <p>
                      Your gift is our extremely popular{' '}
                      <span className="font-bold italic">QuickDraw Gun Magnet</span>.
                    </p>
                    <p>
                      Normally it sells for $39.97… but it’s yours for nothing if you act now and
                      accept the deal on this page today.
                    </p>
                    <p>
                      And the reason people love it is because it lets you{' '}
                      <span className="font-bold">mount your gun virtually anywhere</span> and{' '}
                      <span className="underline">
                        chamber, draw, and fire in{' '}
                        <span className="font-bold">under 1.5 seconds!</span>
                      </span>
                    </p>
                    <p>
                      It’s one of the <span className="font-bold">fastest, most efficient</span>{' '}
                      ways to deploy your firearm whenever it’s not in your concealed holster.
                    </p>
                  </div>
                  <div className="w-full md:w-96 flex-shrink-0 overflow-hidden flex items-center">
                    <div className="relative w-full h-auto">
                      <Image
                        src="/contentimages/VNSH-SGun-Magnet-7-5001.webp"
                        alt="Secure Access"
                        width={384}
                        height={384}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </li>

                <li className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1">
                    <p className="mb-6 text-xl md:text-2xl leading-tight">Whether that's:</p>
                    <div className="flex items-center gap-2 mb-2">
                      <Image
                        src="/contentimages/check-green1.png"
                        alt="Check"
                        width={32}
                        height={32}
                        className="flex-shrink-0"
                      />
                      <span className="leading-none">In the car</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Image
                        src="/contentimages/check-green1.png"
                        alt="Check"
                        width={32}
                        height={32}
                        className="flex-shrink-0"
                      />
                      <span className="leading-none">Under your desk</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Image
                        src="/contentimages/check-green1.png"
                        alt="Check"
                        width={32}
                        height={32}
                        className="flex-shrink-0"
                      />
                      <span className="leading-none">Inside your nightstand</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Image
                        src="/contentimages/check-green1.png"
                        alt="Check"
                        width={32}
                        height={32}
                        className="flex-shrink-0"
                      />
                      <span className="leading-none">By your front door</span>
                    </div>
                    <div className="flex items-center gap-2 mb-6">
                      <Image
                        src="/contentimages/check-green1.png"
                        alt="Check"
                        width={32}
                        height={32}
                        className="flex-shrink-0"
                      />
                      <span className="text-xl md:text-2xl leading-tight">
                        Or just about anywhere!
                      </span>
                    </div>
                    <p className="text-xl md:text-2xl leading-tight mt-4">
                      It gives you back{' '}
                      <span className="font-bold italic">
                        precious, life-saving seconds of reaction time
                      </span>{' '}
                      in the moments where you need it most!
                    </p>
                  </div>
                  <div className="w-full md:w-96 flex-shrink-0 overflow-hidden flex items-center">
                    <div className="relative w-full h-auto">
                      <Image
                        src="/contentimages/VNSH-SGun-Magnet-4-5001.webp"
                        alt="Secure Access"
                        width={384}
                        height={384}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <p className="text-xl md:text-2xl leading-tight">
              1000s of people have <span className="font-bold italic">happily paid full price</span>{' '}
              for the QuickDraw Gun Magnet…
            </p>
            <p className="text-xl md:text-2xl leading-tight font-bold">
              But it’s yours totally FREE when you accept this deal today!
            </p>
            <header className="text-center py-1">
              <div className="text-[25px] md:text-[36px] font-bold leading-tight md:leading-[1.0] text-[#f16500]">
                <div>Plus, You’re Getting An</div>
                <div className="my-0 md:my-2">
                  <span className="text-[rgb(255,0,0)]">Iron-Clad, Money-Back </span>
                  <span>Guarantee</span>
                </div>
              </div>
            </header>
            <div className="w-4/5 md:w-[30%] mx-auto max-w-[1120px] px-4 md:px-0">
              <Image
                src="/contentimages/guarantee-money-back-200.webp"
                alt="VNSH Holster deal"
                className="w-full h-auto"
                width={1120}
                height={600}
                priority
              />
            </div>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              Love everything about your order, or{' '}
              <b>
                <em>we’ll refund you every penny.</em>
              </b>
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight">It’s that simple.</p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              If you aren’t totally thrilled, all you have to do is contact our{' '}
              <span className="font-bold">
                <span className="italic">US-Based Support Team</span>
              </span>{' '}
              within 60 days to get a full refund.
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              <span className="bg-[#ff0] py-1">
                Plus, we also give you a{' '}
                <span className="font-bold">
                  <span className="italic">2-year workmanship guarantee</span>
                </span>{' '}
                as well!
              </span>
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              We know you’ll love your VNSH gear, which is why we’re happy to extend you these
              iron-clad guarantees.
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              So if you want to get an awesome price on the world’s most comfortable holster…
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              <span className="font-bold">
                <span className="italic">Plus… get a FREE QuickDraw gun magnet with it…</span>
              </span>
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              Then you owe it to yourself to grab this deal now!
            </p>
            <div className="text-center my-8 md:my-10">
              <a
                href={getCheckoutUrl('https://secure.vnsh.com/vns3qdbonus/checkout')}
                className="inline-block"
              >
                <button className="bg-[#28a745] hover:bg-[#218838] text-white font-bold py-4 px-8 text-xl md:py-3 md:px-10 md:text-3xl transition-all duration-300 animate-custom-pulse hover:opacity-100 hover:scale-105 transform">
                  {buttonText}
                </button>
              </a>
            </div>
            <div className="text-center my-8">
              <p className="text-xl md:text-1xl font-semibold leading-normal md:leading-tight text-red-600">
                <span className="bg-[#ff0] px-2 py-1">
                  60 Days to Try It Yourself… Love It Or You Don't Pay a Dime!
                </span>
              </p>
            </div>
            {/* Testimonial Images */}
            <div className="w-full my-8">
              {/* Desktop Image */}
              <div className="hidden md:block">
                <Image
                  src="/contentimages/TestimoniesDesktop1.webp"
                  alt="Customer testimonials"
                  width={1400}
                  height={1000}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>
              {/* Mobile Image */}
              <div className="block md:hidden">
                <Image
                  src="/contentimages/vnsh_TestimoniesMobile.webp"
                  alt="Customer testimonials mobile"
                  width={500}
                  height={800}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>
            </div>
            <div className="text-center my-8 md:my-10">
              <a
                href={getCheckoutUrl('https://secure.vnsh.com/vns3qdbonus/checkout')}
                className="inline-block"
              >
                <button className="bg-[#28a745] hover:bg-[#218838] text-white font-bold py-4 px-8 text-xl md:py-3 md:px-10 md:text-3xl transition-all duration-300 animate-custom-pulse hover:opacity-100 hover:scale-105 transform">
                  {buttonText}
                </button>
              </a>
            </div>
            <div className="text-center my-8">
              <p className="text-xl md:text-1xl font-semibold leading-normal md:leading-tight text-red-600">
                <span className="bg-[#ff0] px-2 py-1">
                  60 Days to Try It Yourself… Love It Or You Don't Pay a Dime!
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
