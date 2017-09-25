function Set() {
        this._values = {};
        this._size = 0;
    }

    Set.prototype = {
        hashCode : function hashCode(value) {
            var hash = 0, i, chr;
            if (value.length === 0) return hash;
            for (i = 0; i < value.length; i++) {
                chr   = value.charCodeAt(i);
                hash  = ((hash << 5) - hash) + chr;
                hash |= 0; // Convert to 32bit integer
            }
            return hash;
        },

        add: function add(value) {
            if(!this.contain(value)) {
                this._values[this.hashCode(value)] = value;
                ++this._size;
            }
        },

        contain: function contain(value) {
            return typeof this._values[this.hashCode(value)] !== 'undefined'; 
        },

        remove: function remove(value) {
            if(this.contain(value)) {
                delete this._values[this.hashCode(value)];
                --this._size;
            }
        },

        size: function size() {
            return this._size;
        }

    }

var set = new Set();
set.add("11");
set.add("22");
set.add("11");
set.add("33");

