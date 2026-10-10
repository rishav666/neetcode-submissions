class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sstring=s.split('').sort().join('');
        const tstring=t.split('').sort().join('');
        return sstring===tstring
    }
}
