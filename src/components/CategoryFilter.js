import React from 'react';

function CategoryFilter({category, onChange}) {
    const categories = ['All', 'React', 'JS'];

    return (
        <select className="rounded-full px-5 py-2 bg-transparent transition max-sm:w-full max-sm:text-xs"
            value={category}
            onChange={e => {
                const val = e.target.value;

                onChange(val === 'All' ? undefined : val);
        }}
        >
            <option value={'all'}>All</option>
            {categories.map(cat => (<option key={cat} value={cat}>{cat}</option>))}
        </select>
    );
}

export default CategoryFilter;