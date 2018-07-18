export default function() {
  this.transition(
    this.fromRoute('index'),
    this.toRoute(['resume', 'projects', 'contact']),
    this.media('(min-width: 768px)'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('projects'),
    this.toRoute(['resume', 'contact']),
    this.media('(min-width: 768px)'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('resume'),
    this.toRoute('contact'),
    this.media('(min-width: 768px)'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
