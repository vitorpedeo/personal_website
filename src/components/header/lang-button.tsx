import { Languages } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function LangButton() {
	return (
		<Button variant="ghost" size="icon">
			<Languages size={20} />
		</Button>
	);
}
