export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute(['resume', 'projects']),
    this.use('toRight'),
    this.reverse('toLeft')
  );

  this.transition(
    this.fromRoute('projects'),
    this.toRoute('resume'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
}
