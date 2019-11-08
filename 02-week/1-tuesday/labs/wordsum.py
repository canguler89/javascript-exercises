sentence = input('Write a sentence:')

output = {}

for word in sentence.split():
    if word in output:
        output[word] += 1
    else:
        output[word] = 1
print(output)