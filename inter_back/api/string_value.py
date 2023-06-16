import os
import sys

sys.setrecursionlimit(10000)


def comp(i, gap, n, rnk):
    return rnk[i], rnk[i + gap] if i + gap < n else -1


def build_sa(s):
    n = len(s)
    tmp = [0] * n
    rnk = [ord(ch) - ord("a") for ch in s]
    sa = list(range(n))
    gap = 1
    while True:
        sa.sort(key=lambda i: comp(i, gap, n, rnk))
        tmp[0] = 0
        for i in range(1, n):
            tmp[i] = tmp[i - 1] + int(comp(sa[i - 1], gap, n, rnk) < comp(sa[i], gap, n, rnk))
        for i in range(n):
            rnk[sa[i]] = tmp[i]
        if tmp[n - 1] == n - 1:
            break
        gap *= 2
    return sa, rnk


def build_lcp(s, sa, rnk):
    n = len(s)
    lcp = [0] * n
    k = 0
    for i in range(n):
        if rnk[i] != n - 1:
            j = sa[rnk[i] + 1]
            while i + k < n and j + k < n and s[i + k] == s[j + k]:
                k += 1
            lcp[rnk[i]] = k
            if k:
                k -= 1
    return lcp


def find(par, x):
    if par[x] == x:
        return x
    par[x] = find(par, par[x])
    return par[x]


def unite(par, sze, x, y):
    u, v = find(par, x), find(par, y)
    if u == v:
        return False
    if u < v:
        par[v] = u
        sze[u] += sze[v]
    else:
        par[u] = v
        sze[v] += sze[u]
    return True


def max_value(s):
    n = len(s)
    sa, rnk = build_sa(s)
    lcp = build_lcp(s, sa, rnk)
    lcp = [[lcp[i], i] for i in range(n - 1)]
    lcp.sort(reverse=True)
    ans = n
    mxs = 1
    par = list(range(n))
    sze = [1] * n
    j = 0
    for l in range(n - 1, -1, -1):
        while j < n - 1 and lcp[j][0] >= l:
            if unite(par, sze, lcp[j][1], lcp[j][1] + 1):
                mxs = max(mxs, sze[find(par, lcp[j][1])])
            j += 1
        ans = max(ans, l * mxs)
    return ans


fptr = open(os.environ['OUTPUT_PATH'], 'w')
t = input()
result = max_value(t)
fptr.write(str(result) + '\n')
fptr.close()
