/**
 * Ten przykład pokazuje, rzeczywiste użycie: afterEach() afterAll().
 *
 * Głównie, gdy np.: łączysz się z bazą danych lub otwierasz plik, lub czytasz coś ze strumienia I/O
 * afterAll przyda się w testach, w których chcesz zamknąć te typy połączeń,
 * aby nie powodować np. wycieków pamięci.
 *
 * afterEach() z kolei wykona się po każdym teście.
 * */

async function inMemoryDbConnect() {
	return {
		db() {
			const myDb = new Map();
			return {
				collection(name) {
					if(!myDb.has(name)) {
						myDb.set(name, []);
					}
					return myDb.get(name);
				},
				insertOne(collectionName, obj) {
					myDb.set(collectionName, obj);
				},
				get(collectionName, fieldName = '', value = '') {
					let entity;
					myDb.forEach((element) => {
						  if(element[fieldName] === value) {
						  	entity = element;
						  }
					})
					return entity;
				}
			}
		},
		async close() {
			// some closing logic...
		}
	}
}

describe('afterEach and afterAll block [b002]', () => {

	let connection;
	let db;

	beforeAll(async () => {
		connection = await inMemoryDbConnect();
		db = connection.db();
	});

	// To jest uproszczony przykład. Moglibyśmy tutaj stosować również blok beforeEach()
	afterEach(async () => {
		// możesz zakomentować linię poniżej, aby zobaczyć, że przykład przestanie działać poprawnie.
		db = connection.db();
	})

	afterAll(async () => {
		await connection.close();
	});

	it('(1) should be cleaned before/after the 2nd test...', () => {
		const insertedUser = db.get('users', 'lastName', 'Doe')
		console.log(insertedUser);

		expect(insertedUser).not.toEqual({id: 1, name: 'Jane', lastName: 'Doe'});
	})

	it('should insert user to DB', () => {
		const collectionName = 'users';
		db.collection(collectionName);
		const myUser = {id: 1, name: 'Jane', lastName: 'Doe'};

		db.insertOne(collectionName, myUser);

		const insertedUser = db.get(collectionName, 'lastName', 'Doe')
		expect(insertedUser).toEqual(myUser);
	})

	it('(2) should be cleaned after the 2nd test...', () => {
		const insertedUser = db.get('users', 'lastName', 'Doe')
		console.log(insertedUser);

		expect(insertedUser).not.toEqual({id: 1, name: 'Jane', lastName: 'Doe'});
	})
})
