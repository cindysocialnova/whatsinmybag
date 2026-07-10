// ==========================================================================
// 1. DATA REPOSITORY
// ==========================================================================
const featuresThreeData = [
  
{
  title: "Marketing",
  description: "Driving growth and visibility through optimized campaigns."
},
{
  title: "Data",
  description: "Optimize your analytics and empower your team with clean, insightful visualization dashboards."
},
{
  title: "Social Media",
  description: "Align your social media presence with your brand while staying on trend. Experiment with quizzes, live shows, and more."
}
  
   
  
];

// ==========================================================================
// 2. HELPER (Scoped locally or uses the global one if scripts are combined)
// ==========================================================================
function createFeatureNode(tag, properties = {}, text = '') {
  const element = document.createElement(tag);
  Object.assign(element, properties);
  if (text) {
    element.textContent = text;
  }
  return element;
}

// ==========================================================================
// 3. INJECTION COMPONENT
// ==========================================================================
function renderFeaturesThreeGrid() {
  const target = document.getElementById('features-three-target');
  if (!target) return;

  const section = createFeatureNode('section', { className: 'features-three-section' });
  const container = createFeatureNode('div', { className: 'features-three-container' });

  featuresThreeData.forEach(item => {
    const column = createFeatureNode('div', { className: 'feature-column' });
    const h2 = createFeatureNode('h2', { className: 'feature-column-title' }, item.title);
    const p = createFeatureNode('p', { className: 'feature-column-desc' }, item.description);

    column.appendChild(h2);
    column.appendChild(p);
    container.appendChild(column);
  });

  section.appendChild(container);
  target.appendChild(section);
}

// Execute the rendering sequence
renderFeaturesThreeGrid();