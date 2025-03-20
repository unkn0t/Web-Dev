def merge_the_tools(string, k):
    l = [string[i:i+k] for i in range(0, len(string), k)]
    l2 = [''.join(dict.fromkeys(s)) for s in l]
    for s in l2:
        print(s)

if __name__ == '__main__':
    string, k = input(), int(input())
    merge_the_tools(string, k)
