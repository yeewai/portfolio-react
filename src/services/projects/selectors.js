const sortByDateFn = (a,b) => {
  return new Date(b.date) - new Date(a.date);
}

export const getArt = (state) => state.projects.art.sort(sortByDateFn);
export const getCode = (state) => state.projects.code.sort(sortByDateFn);

export const getByName = ( state, params ) => (
    ["art", "code"].includes(params.projectType)
    ? state.projects[params.projectType].find( p => p.slug === params.projectTitle )
    : null
)
