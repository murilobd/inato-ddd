interface ValueObjectProps {
	[index: string]: any;
}

export abstract class ValueObject<T extends ValueObjectProps> {
	public props: T;

	constructor(props: T) {
		this.props = {
			...props,
		};
	}
}
