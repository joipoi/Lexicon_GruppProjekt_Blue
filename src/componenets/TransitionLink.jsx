'use client';

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

    // Use native view transition if available
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        router.push(href);
      });
    } else {
      router.push(href);
    }

    body?.classList.remove("page-transition");
    // TODO: Run enter animation
  };

  return (
    <a
      href={href}
      onClick={handleTransition}
      {...props}
    >
      {children}
    </a>
  );
};
