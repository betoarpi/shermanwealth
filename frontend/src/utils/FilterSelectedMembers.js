function FilterSelectedMembers (members, selected) {
  return selected.filter((item) => (
    members.map(member => member.id === item.id)
  ))
}

export default FilterSelectedMembers
