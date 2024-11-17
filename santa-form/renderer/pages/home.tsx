import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <title>さんたの　さいと　🎅🦌🦌🦌🦌</title>
      </Head>
      <div className="grid grid-col-1 text-2xl w-full text-center">
        <div>
          <Image
            className="ml-auto mr-auto mt-8"
            src="/images/christmas_santa_sori.png"
            alt="わたしだよ"
            width={256}
            height={256}
          />
        </div>
        <div className='text-white text-4xl'>
          <p className='mt-12 mb-3 animate-text-focus-in'>わたしは　さんただよ🎅</p>
          <p className='mb-3 animate-text-focus-in'>ようこそ　わたしの　さいとへ。</p>
          <p className='mb-3 animate-text-focus-in'>「すすむ」ぼたんを　おして</p>
          <p className='mb-8 animate-text-focus-in'>きみが　ほしいものを　おしえてね。</p>
        </div>
      </div>
      <div className="mt-1 w-full flex-wrap flex justify-center">
        <Link href="/next">
          <Image src="/images/navigation_go.png" alt='これを　おすと　さいとを　ひらくよ' width={150} height={90} />
        </Link>
      </div>
      {/* 雪エフェクト */}
      <div className='absolute w-full h-full top-0 left-0 pointer-events-none	'>
        <div className='text-[#fffafa] text-[14px] fixed top-[-5%] animate-roll [text-shadow:_24vw_-191px_2px,_97vw_-12px_0px,_49vw_-162px_1px,_50vw_-161px_8px,_61vw_-56px_1px,_81vw_-147px_3px,_55vw_-292px_8px,_88vw_-185px_7px,_44vw_-223px_2px,_67vw_-250px_5px,_42vw_-7px_0px,_3vw_-27px_1px,_7vw_-229px_6px,_76vw_-198px_2px,_44vw_-241px_1px,_46vw_-14px_1px,_90vw_-197px_3px,_37vw_-140px_0px,_93vw_-227px_4px,_29vw_-56px_9px,_16vw_-94px_2px,_63vw_-238px_5px,_81vw_-111px_4px,_79vw_-265px_1px,_91vw_-146px_1px,_35vw_-134px_1px,_51vw_-276px_6px,_19vw_-72px_9px,_16vw_-25px_9px,_32vw_-103px_2px,_27vw_-186px_5px,_3vw_-95px_7px,_79vw_-244px_2px,_76vw_-211px_5px,_61vw_-68px_2px,_6vw_-229px_4px,_54vw_-159px_7px,_9vw_-131px_8px,_22vw_-269px_6px,_87vw_-175px_8px,_59vw_-197px_9px,_46vw_-230px_3px,_7vw_-68px_8px,_37vw_-286px_4px,_29vw_-147px_8px,_14vw_-129px_0px,_54vw_-242px_5px,_48vw_-150px_10px,_66vw_-234px_9px,_8vw_-276px_4px,_0vw_-85px_8px,_33vw_-209px_1px,_77vw_-16px_3px,_68vw_-201px_4px,_60vw_-265px_1px,_54vw_-204px_2px,_61vw_-42px_2px,_30vw_-97px_3px,_62vw_-172px_2px,_35vw_-1px_3px,_21vw_-43px_7px,_44vw_-170px_1px,_82vw_-175px_9px,_43vw_-171px_8px,_97vw_-184px_6px,_44vw_-131px_2px,_51vw_-232px_2px,_62vw_-85px_9px,_68vw_-289px_8px,_86vw_-128px_7px,_50vw_-125px_6px,_99vw_-237px_8px,_44vw_-99px_9px,_61vw_-37px_3px,_5vw_-114px_4px,_7vw_-277px_9px,_6vw_-259px_7px,_46vw_-180px_2px,_91vw_-69px_3px,_20vw_-136px_2px,_41vw_-65px_5px,_28vw_-98px_5px,_11vw_-240px_1px,_60vw_-19px_2px,_52vw_-84px_6px,_27vw_-259px_3px,_64vw_-282px_3px,_88vw_-120px_1px,_39vw_-179px_3px,_98vw_-58px_3px,_26vw_-179px_2px,_41vw_-180px_7px,_42vw_-226px_1px,_9vw_-44px_3px,_79vw_-73px_6px,_20vw_-162px_2px,_35vw_-278px_7px,_28vw_-300px_6px,_1vw_-184px_7px,_60vw_-221px_1px]'>●</div>
        <div className='text-[#fffafa] text-[14px] fixed top-[-5%] animate-roll2 [text-shadow:_34vw_-191px_2px,_7vw_-12px_0px,_59vw_-162px_1px,_60vw_-161px_8px,_71vw_-56px_1px,_91vw_-147px_3px,_65vw_-292px_8px,_98vw_-185px_7px,_54vw_-223px_2px,_77vw_-250px_5px,_52vw_-7px_0px,_13vw_-27px_1px,_17vw_-229px_6px,_86vw_-198px_2px,_54vw_-241px_1px,_56vw_-14px_1px,_0vw_-197px_3px,_47vw_-140px_0px,_3vw_-227px_4px,_39vw_-56px_9px,_26vw_-94px_2px,_73vw_-238px_5px,_91vw_-111px_4px,_89vw_-265px_1px,_1vw_-146px_1px,_45vw_-134px_1px,_61vw_-276px_6px,_29vw_-72px_9px,_26vw_-25px_9px,_42vw_-103px_2px,_37vw_-186px_5px,_13vw_-95px_7px,_89vw_-244px_2px,_86vw_-211px_5px,_71vw_-68px_2px,_16vw_-229px_4px,_64vw_-159px_7px,_19vw_-131px_8px,_32vw_-269px_6px,_97vw_-175px_8px,_69vw_-197px_9px,_56vw_-230px_3px,_17vw_-68px_8px,_47vw_-286px_4px,_39vw_-147px_8px,_24vw_-129px_0px,_64vw_-242px_5px,_58vw_-150px_10px,_76vw_-234px_9px,_18vw_-276px_4px,_10vw_-85px_8px,_43vw_-209px_1px,_87vw_-16px_3px,_78vw_-201px_4px,_70vw_-265px_1px,_64vw_-204px_2px,_71vw_-42px_2px,_40vw_-97px_3px,_72vw_-172px_2px,_45vw_-1px_3px,_31vw_-43px_7px,_54vw_-170px_1px,_92vw_-175px_9px,_53vw_-171px_8px,_7vw_-184px_6px,_54vw_-131px_2px,_61vw_-232px_2px,_72vw_-85px_9px,_78vw_-289px_8px,_96vw_-128px_7px,_60vw_-125px_6px,_9vw_-237px_8px,_54vw_-99px_9px,_71vw_-37px_3px,_15vw_-114px_4px,_17vw_-277px_9px,_16vw_-259px_7px,_56vw_-180px_2px,_1vw_-69px_3px,_30vw_-136px_2px,_51vw_-65px_5px,_38vw_-98px_5px,_21vw_-240px_1px,_70vw_-19px_2px,_62vw_-84px_6px,_37vw_-259px_3px,_74vw_-282px_3px,_98vw_-120px_1px,_49vw_-179px_3px,_8vw_-58px_3px,_36vw_-179px_2px,_51vw_-180px_7px,_52vw_-226px_1px,_19vw_-44px_3px,_89vw_-73px_6px,_30vw_-162px_2px,_45vw_-278px_7px,_38vw_-300px_6px,_11vw_-184px_7px,_70vw_-221px_1px]'>●</div>
        <div className='text-[#fffafa] text-[14px] fixed top-[-5%] animate-roll3 [text-shadow:_44vw_-191px_2px,_17vw_-12px_0px,_69vw_-162px_1px,_70vw_-161px_8px,_81vw_-56px_1px,_1vw_-147px_3px,_75vw_-292px_8px,_8vw_-185px_7px,_64vw_-223px_2px,_87vw_-250px_5px,_62vw_-7px_0px,_23vw_-27px_1px,_27vw_-229px_6px,_96vw_-198px_2px,_64vw_-241px_1px,_66vw_-14px_1px,_10vw_-197px_3px,_57vw_-140px_0px,_13vw_-227px_4px,_49vw_-56px_9px,_36vw_-94px_2px,_83vw_-238px_5px,_1vw_-111px_4px,_99vw_-265px_1px,_11vw_-146px_1px,_55vw_-134px_1px,_71vw_-276px_6px,_39vw_-72px_9px,_36vw_-25px_9px,_52vw_-103px_2px,_47vw_-186px_5px,_23vw_-95px_7px,_99vw_-244px_2px,_96vw_-211px_5px,_81vw_-68px_2px,_26vw_-229px_4px,_74vw_-159px_7px,_29vw_-131px_8px,_42vw_-269px_6px,_7vw_-175px_8px,_79vw_-197px_9px,_66vw_-230px_3px,_27vw_-68px_8px,_57vw_-286px_4px,_49vw_-147px_8px,_34vw_-129px_0px,_74vw_-242px_5px,_68vw_-150px_10px,_86vw_-234px_9px,_28vw_-276px_4px,_20vw_-85px_8px,_53vw_-209px_1px,_97vw_-16px_3px,_88vw_-201px_4px,_80vw_-265px_1px,_74vw_-204px_2px,_81vw_-42px_2px,_50vw_-97px_3px,_82vw_-172px_2px,_55vw_-1px_3px,_41vw_-43px_7px,_64vw_-170px_1px,_2vw_-175px_9px,_63vw_-171px_8px,_17vw_-184px_6px,_64vw_-131px_2px,_71vw_-232px_2px,_82vw_-85px_9px,_88vw_-289px_8px,_6vw_-128px_7px,_70vw_-125px_6px,_19vw_-237px_8px,_64vw_-99px_9px,_81vw_-37px_3px,_25vw_-114px_4px,_27vw_-277px_9px,_26vw_-259px_7px,_66vw_-180px_2px,_11vw_-69px_3px,_40vw_-136px_2px,_61vw_-65px_5px,_48vw_-98px_5px,_31vw_-240px_1px,_80vw_-19px_2px,_72vw_-84px_6px,_47vw_-259px_3px,_84vw_-282px_3px,_8vw_-120px_1px,_59vw_-179px_3px,_18vw_-58px_3px,_46vw_-179px_2px,_61vw_-180px_7px,_62vw_-226px_1px,_29vw_-44px_3px,_99vw_-73px_6px,_40vw_-162px_2px,_55vw_-278px_7px,_48vw_-300px_6px,_21vw_-184px_7px,_80vw_-221px_1px]'>●</div>
        <div className='text-[#fffafa] text-[14px] fixed top-[-5%] animate-roll4 [text-shadow:_54vw_-191px_2px,_27vw_-12px_0px,_79vw_-162px_1px,_80vw_-161px_8px,_91vw_-56px_1px,_11vw_-147px_3px,_85vw_-292px_8px,_18vw_-185px_7px,_74vw_-223px_2px,_97vw_-250px_5px,_72vw_-7px_0px,_33vw_-27px_1px,_37vw_-229px_6px,_6vw_-198px_2px,_74vw_-241px_1px,_76vw_-14px_1px,_20vw_-197px_3px,_67vw_-140px_0px,_23vw_-227px_4px,_59vw_-56px_9px,_46vw_-94px_2px,_93vw_-238px_5px,_11vw_-111px_4px,_9vw_-265px_1px,_21vw_-146px_1px,_65vw_-134px_1px,_81vw_-276px_6px,_49vw_-72px_9px,_46vw_-25px_9px,_62vw_-103px_2px,_57vw_-186px_5px,_33vw_-95px_7px,_9vw_-244px_2px,_6vw_-211px_5px,_91vw_-68px_2px,_36vw_-229px_4px,_84vw_-159px_7px,_39vw_-131px_8px,_52vw_-269px_6px,_17vw_-175px_8px,_89vw_-197px_9px,_76vw_-230px_3px,_37vw_-68px_8px,_67vw_-286px_4px,_59vw_-147px_8px,_44vw_-129px_0px,_84vw_-242px_5px,_78vw_-150px_10px,_96vw_-234px_9px,_38vw_-276px_4px,_30vw_-85px_8px,_63vw_-209px_1px,_7vw_-16px_3px,_98vw_-201px_4px,_90vw_-265px_1px,_84vw_-204px_2px,_91vw_-42px_2px,_60vw_-97px_3px,_92vw_-172px_2px,_65vw_-1px_3px,_51vw_-43px_7px,_74vw_-170px_1px,_12vw_-175px_9px,_73vw_-171px_8px,_27vw_-184px_6px,_74vw_-131px_2px,_81vw_-232px_2px,_92vw_-85px_9px,_98vw_-289px_8px,_16vw_-128px_7px,_80vw_-125px_6px,_29vw_-237px_8px,_74vw_-99px_9px,_91vw_-37px_3px,_35vw_-114px_4px,_37vw_-277px_9px,_36vw_-259px_7px,_76vw_-180px_2px,_21vw_-69px_3px,_50vw_-136px_2px,_71vw_-65px_5px,_58vw_-98px_5px,_41vw_-240px_1px,_90vw_-19px_2px,_82vw_-84px_6px,_57vw_-259px_3px,_94vw_-282px_3px,_18vw_-120px_1px,_69vw_-179px_3px,_28vw_-58px_3px,_56vw_-179px_2px,_71vw_-180px_7px,_72vw_-226px_1px,_39vw_-44px_3px,_9vw_-73px_6px,_50vw_-162px_2px,_65vw_-278px_7px,_58vw_-300px_6px,_31vw_-184px_7px,_90vw_-221px_1px]'>●</div>
      </div>
      <div className='absolute bottom-0 right-0 text-gray-700 text-4'>
        BGM by.OtoLogic
      </div>
    </React.Fragment>
  )
}
