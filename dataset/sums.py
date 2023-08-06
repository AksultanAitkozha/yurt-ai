def comb_sum(arr):
    for i in range(0, len(arr)):
        for j in range(0, len(arr)):
            yield arr[i]
            yield arr[i] + arr[j]
            #if (arr[i] - arr[j] > 0):
                #yield arr[i] - arr[j]

n = 9
arr = [1, 3, 4]
count = 0
for num in comb_sum(arr):
    for i in range(1, n+1):
        #print(num)
        if num == i:
            count += 1

print(count)
if (count >= n):
    print('Yes')
else:
    print('No')
    #print(count)
