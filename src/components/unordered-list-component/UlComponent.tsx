
import type { UnorderedList } from "../../data/types/UnorderedList";

export function Ul_component({data}:{data:UnorderedList}) {
    return (
        <div>
            <h3>{data.list_title}</h3>
            <ul>{
                data.list.map((item) =>
                    <li>{item}</li>
                )
            }</ul>
        </div>
    )
}