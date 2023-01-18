def add_nums():
    num1 = 10
    num2 = 20
    return num1 + num2

print(add_nums)
print(add_nums())


numbers = [2, 3, 4, 5, 6, 7]

x = list(map(lambda x: x**2, numbers))
print(x)


cities = ['Barcelona', '', '    ', '  ', 'Madrid', 'Seville']

new_cities = list(filter(lambda city: city.strip(), cities))
print(new_cities)


for city in cities:
    print((lambda city: city.strip())(city))


my_name = ['B', 'r', 'i', 'a', 'n']

my_name_joined = '-'.join(my_name)
print(my_name_joined)


print(my_name[:4:2])

