"use client";

import { ViewTransitions } from 'next-view-transitions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink = ({ children, href, ...props }) => {
  const router = useRouter();

  const handleTransition = async (e) => {
    e.preventDefault();

    const body = document.querySelector('body');

    body?.classList.add("page-transition");

    await sleep(300); // Wait for the transition to start

    router.push(href);

    body?.classList.remove("page-transition");
    //TODO: Run enter animation
  };

  return (
    <ViewTransitions>
      <Link
        onClick={(e) => {
          handleTransition(e);
        }}
        href={href}
        {...props}
      >
        {children}
      </Link>
    </ViewTransitions>
  );
};

