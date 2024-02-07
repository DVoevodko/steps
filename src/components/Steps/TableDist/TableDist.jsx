export const TableDist = (props) => {
    return (
    <div style={{textAlign: "center"}}>
      <table>
        <thead>
          <tr>
            <th colSpan="1"> Дата (ДД.ММ.ГГГГ)
            </th>
            <th colSpan="2"> Пройдено (км)
            </th>
          </tr>
        </thead>
        <tbody>
            {props.steps.map((step) => (
                <tr>
                  <td>
                    {step.date}
                  </td>
                  <td>
                    {step.dist}
                  </td>
                  <td>
                    <input className='btn'
                           type='button'
                           value = 'Del'
                           onClick={() => step.date && props.onDelete(step.date)} Del
                    />
                  </td>
                </tr> 
                 )
              )
            }
        </tbody>
      </table>
    </div>
    )

}