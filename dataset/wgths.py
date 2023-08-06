def weights_sum(numbers, n):
    sums1, sums2 = [], []
    numbers1 = numbers[:len(numbers) // 2]
    numbers2 = numbers[len(numbers) // 2:]

    for sums, numbers_ in ((sums1, numbers1), (sums2, numbers2)):
        for number in numbers_:
            for sum_ in sums[:]:
                sums.append(sum_ + number)
                sums.append(sum_ - number)

            sums.append(number)

    for sum_ in sums1:
        if n - sum_ in sums2:
            return True

    return False

flag = 1
n = int(input())
inp_string = input()
user_list = inp_string.split()

for i in range(len(user_list)):
    user_list[i] = int(user_list[i])

for val in range(1, n+1):
    if (weights_sum(user_list, val) != True):
        print ("False")
        break
    else:
        pass
