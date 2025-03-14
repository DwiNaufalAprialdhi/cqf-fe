import React from 'react'

type CardReviewProps = {
      children: React.ReactNode
}
export default function CardReview(props: CardReviewProps) {
      return (
            <>
                  <div className="w-full p-4 border border-theme-gray_lg rounded-[8px] flex flex-col items-start justify-start">
                        {props.children}
                  </div>
            </>
      )
}
