export default function () {
  this.transition(
    this.fromRoute('index'),
    this.toRoute(['resume', 'projects', 'contact']),
    this.use('toRight'),
    this.reverse('toLeft')
  );

  this.transition(
    this.fromRoute('projects'),
    this.toRoute(['resume', 'contact']),
    this.use('toRight'),
    this.reverse('toLeft')
  );

  this.transition(
    this.fromRoute('resume'),
    this.toRoute('contact'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
}
