import React, { useState } from "react";

export default function List<U>(props: {
    items: U[],
    Item: React.FC<{item: U}>,
}) {
    const { items, Item } = props;

    return (
        <div>
            {items.map((item) => <Item item={item} />)}
        </div>
    )
}

