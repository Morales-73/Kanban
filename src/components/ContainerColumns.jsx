import React from "react"
import { useStore } from "../store/StoreProvider"
import { Column } from "./Column"

export const ContainerColumns = () => {

    const {columns} = useStore()

  return (
    <>
        <div className="container mx-auto h-3/4 flex justify-center gap-x-5">
            {columns.map(col =>
              <Column key={col.id} column={col}/>
            )}
        </div>
    </>
  )
}