{
	class Pair<T, U> {
		constructor(private first: T, private second: U) {}
		getFirst(): T {
			return this.first;
		}
		getSecond(): U {
			return this.second;
		}
	}

	const pairs1 = new Pair(10, "a");
	const pairs2 = new Pair(10, 20);
	const pairs3 = new Pair("b", "a");
	// 이렇게도 활용이 가넝
}
// implements 사용하기
{
	interface Repository<T> {
		add(item: T): void;
		get(id: number): T | undefined;
	}
	class InMemoryRepository<T> implements Repository<T> {
		private items: T[] = [];
		add(item: T) {
			this.items.push(item);
		}
		get(id: number): T | undefined {
			return this.items[id];
		}
	}

	interface User {
		id: number;
		name: string;
	}

	const userRepository = new InMemoryRepository<User>();
	userRepository.add({ id: 1, name: "kim" });
	console.log(userRepository.get(1));
}
