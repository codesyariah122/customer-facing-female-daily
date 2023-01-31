import '@styles/globals.sass';
import { ReactQueryWrapper } from '@components/app/commons';
export default function DemoGraphQLLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryWrapper>
      <section className="flex w-full items-center justify-center backdrop-blur-md">
        {children}
      </section>
    </ReactQueryWrapper>
  );
}
