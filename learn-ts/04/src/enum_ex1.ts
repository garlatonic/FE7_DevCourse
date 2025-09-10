// 1
{
	const enum Days {
		MONDAY = 1,
		TUESDAY,
		WEDNESDAY,
		THURSDAY,
		FRIDAY,
		SATURDAY,
		SUNDAY,
	}

	function getDayName(day: Days): string {
		if (day === Days.MONDAY) return "Monday";
		if (day === Days.TUESDAY) return "Tuesday";
		if (day === Days.WEDNESDAY) return "Wednesday";
		if (day === Days.THURSDAY) return "Thursday";
		if (day === Days.FRIDAY) return "Friday";
		if (day === Days.SATURDAY) return "Saturday";
		if (day === Days.SUNDAY) return "Sunday";
		return "Invalid day";
	}
}
// 2
{
	const enum Status {
		SUCCESS = 200,
		NOT_FOUND = 404,
		INTERNAL_ERROR = 500,
	}

	function getStatusMessage(status: Status): string {
		if (status === Status.SUCCESS) return "Success";
		if (status === Status.NOT_FOUND) return "Not Found";
		if (status === Status.INTERNAL_ERROR) return "Internal Server Error";
		return "Unknown Status";
	}

	console.log(getStatusMessage(Status.SUCCESS));
}
// 3
{
	const enum Citys {
		SEOUL = "Seoul",
		BUSAN = "Busan",
		DAEGU = "Daegu",
	}
	const enum Zipcode {
		SEOUL = 100,
		BUSAN = 200,
		DAEGU = 300,
	}

	function getCityByZip(zip: Zipcode): Citys {
		if (zip === Zipcode.SEOUL) return Citys.SEOUL;
		if (zip === Zipcode.BUSAN) return Citys.BUSAN;
		if (zip === Zipcode.DAEGU) return Citys.DAEGU;
		throw new Error("Invalid Zipcode");
	}
}
// 4
{
	const enum Role {
		ADMIN = "admin",
		USER = "user",
		GUEST = "guest",
	}
	const enum Permission {
		ADMIN = "Full access",
		USER = "Limited access",
		GUEST = "Guest access",
	}

	function getPermissionLevel(role: Role): Permission {
		if (role === Role.ADMIN) return Permission.ADMIN;
		if (role === Role.USER) return Permission.USER;
		if (role === Role.GUEST) return Permission.GUEST;
		throw new Error("Invalid Role");
	}
}
// 5
{
	const enum Status {
		PENDING = 1,
		SHIPPED,
		DELIVERED,
	}
	const enum ProductStatus {
		PENDING = "Pending",
		SHIPPED = "Shipped",
		DELIVERED = "Delivered",
	}

	function getProductStatus(status: Status): ProductStatus {
		if (status === Status.PENDING) return ProductStatus.PENDING;
		if (status === Status.SHIPPED) return ProductStatus.SHIPPED;
		if (status === Status.DELIVERED) return ProductStatus.DELIVERED;
		throw new Error("Unknown Status");
	}
}
// 6
{
	const enum OrderStatus {
		ORDER_PLACED = "Order Placed",
		PAYMENT_PENDING = "Payment Pending",
		SHIPPED = "Shipped",
		DELIVERED = "Delivered",
	}

	function getOrderStatus(status: OrderStatus): string {
		if (status === OrderStatus.ORDER_PLACED)
			return "Your order has been placed.";
		if (status === OrderStatus.PAYMENT_PENDING) return "Payment is pending.";
		if (status === OrderStatus.SHIPPED) return "Your order has been shipped.";
		if (status === OrderStatus.DELIVERED)
			return "Your order has been delivered.";
		return "Unknown Status";
	}
}
// 7
{
	const enum Status {
		IS_INACTIVE,
		IS_ACTIVE,
	}

	function toggleStatus(status: Status): boolean {
		return !status;
	}
	console.log(toggleStatus(1));
}
// 8
{
	const enum Options {
		OPTION_ONE = "Option 1",
		OPTION_TWO = "Option 2",
		OPTION_THREE = "Option 3",
	}

	function getOptionValue(option: Options): string {
		if (option === Options.OPTION_ONE) return "You selected Option 1.";
		if (option === Options.OPTION_TWO) return "You selected Option 2.";
		if (option === Options.OPTION_THREE) return "You selected Option 3.";
		return "Invalid option";
	}
}
// 9
{
	const enum Meal {
		BREAKFAST = "Breakfast",
		LUNCH = "Lunch",
		DINNER = "Dinner",
	}

	function getMealTime(meal: Meal): string {
		if (meal === Meal.BREAKFAST) return "Good morning, it's breakfast time!";
		if (meal === Meal.LUNCH) return "Good afternoon, it's lunch time!";
		if (meal === Meal.DINNER) return "Good evening, it's dinner time!";
		return "Invalid meal time";
	}

	console.log(getMealTime(Meal.BREAKFAST));
}
// 10
{
	// const enum LoginStatus {
	// 	LOGGED_OUT,
	// 	LOGGED_IN,
	// }

	const LoginStatus = {
		LOGGED_IN: "LOGGED_IN",
		LOGGED_OUT: "LOGGED_OUT",
	} as const;
	type LoginStatus = (typeof LoginStatus)[keyof typeof LoginStatus];

	function checkLoginStatus(status: LoginStatus): string {
		if (status === LoginStatus.LOGGED_IN) return "You are logged in.";
		if (status === LoginStatus.LOGGED_OUT) return "You are logged out.";
		return "Unknown status";
	}
}
