type IRootLayoutProps = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<IRootLayoutProps>) {
	return children;
}
